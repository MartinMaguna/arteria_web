
import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const ObraDos = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let stars = [];

      // Genera una estrella
      const createStar = (x, y) => {
        return {
          x,
          y,
          size: p.random(1, 3), // Tamaño de la estrella
          alpha: p.random(150, 255), // Transparencia para el brillo
          brightness: p.random(50, 255) // Brillo
        };
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noLoop(); // Optimización: no dibuja continuamente por defecto
      };

      p.draw = () => {
        p.background(0);
        
        // Dibuja todas las estrellas
        stars.forEach(star => {
          p.noStroke();
          p.fill(star.brightness, star.brightness, star.brightness, star.alpha);
          p.ellipse(star.x, star.y, star.size, star.size);
        });

        // Dibuja líneas entre las estrellas cercanas para formar constelaciones
        p.stroke(255, 255, 255, 80); // Color sutil para las líneas
        p.noFill();
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const distance = p.dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
            if (distance < 100) { // Solo conecta estrellas cercanas
              p.line(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
            }
          }
        }
      };

      // Reacción al movimiento del mouse
      p.mouseMoved = () => {
        // Genera estrellas aleatorias cerca del mouse
        for (let i = 0; i < 1; i++) {
          stars.push(createStar(p.mouseX + p.random(-30, 30), p.mouseY + p.random(-60, 60)));
        }

        // Redibuja el lienzo
        p.redraw();
      };

      // Limpia el canvas al hacer clic
      p.mousePressed = () => {
        stars = []; // Elimina las estrellas
        p.background(0); // Limpia el fondo
      };

      // Ajusta el tamaño del canvas al cambiar el tamaño de la ventana
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const canvas = new p5(sketch, sketchRef.current);

    // Limpieza del sketch al desmontar el componente
    return () => {
      canvas.remove();
    };
  }, []);


};