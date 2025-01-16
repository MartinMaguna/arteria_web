import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const CampoEstrellas = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const CANTIDAD_ESTRELLAS = 300;
      let estrellas = [];

      class Estrella {
        constructor() {
          this.x = p.random(-150, 150);
          this.y = p.random(-150, 150);
          this.velocidadObjetivo = p.random(10);
          this.velocidad = 0;
        }

        dibujar() {
          p.stroke('white');
          this.velocidad += 0.05;
          if (this.velocidad > this.velocidadObjetivo) {
            this.velocidad = this.velocidadObjetivo;
          }
          p.strokeWeight(this.velocidad);
          p.point(this.x, this.y);
          this.mover();
          this.reiniciar();
        }

        mover() {
          let aceleracion = p.createVector(this.x, this.y);
          aceleracion.normalize(); // Convertimos el vector en uno de radio 1
          aceleracion.mult(this.velocidad); // Le asignamos una magnitud deseada
          this.x += aceleracion.x; // Se mueve en x
          this.y += aceleracion.y; // Se mueve en y
        }

        estaFuera() {
          return (
            this.x < -p.width / 2 || 
            this.x > p.width / 2 || 
            this.y < -p.height / 2 || 
            this.y > p.height / 2
          );
        }

        reiniciar() {
          if (this.estaFuera()) {
            const index = estrellas.indexOf(this);
            estrellas.splice(index, 1);
            estrellas.push(new Estrella());
          }
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < CANTIDAD_ESTRELLAS; i++) {
          estrellas.push(new Estrella());
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(0, 60);
        p.translate(p.width / 2, p.height / 2);
        for (const estrella of estrellas) {
          estrella.dibujar();
        }
      };
    };

    const canvas = new p5(sketch, sketchRef.current);

    return () => {
      canvas.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};