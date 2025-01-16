import { useEffect } from 'react';
import p5 from 'p5';

const LogoGenerativo = () => {
  useEffect(() => {
    const sketch = (p) => {
      let points = [];

      p.setup = () => {
        // Crear el canvas en el contenedor del logo
        const canvas = p.createCanvas(150, 150); 
        canvas.parent('logo-container'); // Asocia el canvas al contenedor
        p.noFill();
        p.stroke(255);
        p.strokeWeight(2);
      };

      p.draw = () => {
        p.background(0);

        // Dibuja una espiral generativa que cambia con el mouse
        let angle = p.frameCount * 0.05;
        let x = p.width / 2 + p.cos(angle) * 50;
        let y = p.height / 2 + p.sin(angle) * 50;

        points.push(p.createVector(x, y));

        if (points.length > 100) {
          points.shift(); // Elimina los puntos más viejos para que la espiral sea suave
        }

        for (let i = 0; i < points.length; i++) {
          p.point(points[i].x, points[i].y);
        }

        // Reacciona al movimiento del mouse, alterando la espiral
        let freq = p.map(p.mouseX, 0, p.width, 0.05, 0.1);
        p.strokeWeight(p.map(p.mouseY, 0, p.height, 1, 4));
      };
    };

    const canvas = new p5(sketch);

    return () => {
      canvas.remove();
    };
  }, []);

  return null; // No se necesita renderizar nada aquí
};

export default LogoGenerativo;
