import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const LogoGenerativo = ( { speed = (12) } ) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(200, 200); // Tamaño del logo
        canvas.parent(canvasRef.current); // Asignar el canvas al contenedor
        p.frameRate(speed);
      };

      p.draw = () => {
        p.background(255); // Fondo blanco
        p.noFill();
        p.stroke(0); // Color del trazo
        p.strokeWeight(2); // Grosor del trazo

        p.beginShape();
        for (let i = 0; i < 6; i++) {
          p.vertex(p.random(p.width), p.random(p.height));
        }
        p.endShape(p.CLOSE);

        p.textSize(32);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("ARTERIA", p.width / 2, p.height / 2);

        p.fill(p.random(255), p.random(255), p.random(255));
        p.stroke(p.random(255), p.random(255), p.random(255));

        // Generar formas geométricas aleatorias
        const shapes = p.random(['circles', 'triangles', 'lines']);
        if (shapes === 'circles') {
          for (let i = 0; i < 5; i++) {
            const x = p.random(p.width);
            const y = p.random(p.height);
            const size = p.random(20, 100);
            p.ellipse(x, y, size, size);
          }
        } else if (shapes === 'triangles') {
          for (let i = 0; i < 3; i++) {
            const x1 = p.random(p.width);
            const y1 = p.random(p.height);
            const x2 = p.random(p.width);
            const y2 = p.random(p.height);
            const x3 = p.random(p.width);
            const y3 = p.random(p.height);
            p.triangle(x1, y1, x2, y2, x3, y3);
          }
        } else if (shapes === 'lines') {
          for (let i = 0; i < 10; i++) {
            const x1 = p.random(p.width);
            const y1 = p.random(p.height);
            const x2 = p.random(p.width);
            const y2 = p.random(p.height);
            p.line(x1, y1, x2, y2);
          }
        }
      };
    };

    const p5Instance = new p5(sketch);
    return () => {
      p5Instance.remove(); // Limpiar el canvas al desmontar el componente
    };
  }, []);

  return <div ref={canvasRef}></div>; // Contenedor para el canvas
};

export default LogoGenerativo;