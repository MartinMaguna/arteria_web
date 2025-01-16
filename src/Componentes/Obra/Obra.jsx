import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const Obra = () => {
  const sketchRef = useRef();
  const starTrail = []; // Cola para las estrellas generadas por el movimiento del mouse

  useEffect(() => {
    const sketch = (p) => {
      let colors;

      // Genera una estrella con parámetros iniciales suaves
      const createStar = (x, y) => {
        return {
          x,
          y,
          size: p.random(1, 3), // Tamaño de la estrella
          alpha: 0, // Comienza invisible
          brightness: p.random(50, 255), // Brillo
          life: 0 // "Vida" de la estrella (0 es muerto, 255 es completamente visible)
        };
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noLoop(); // Optimización: no dibuja continuamente por defecto
      };

      p.draw = () => {
        p.background(0);

        // Dibuja todas las estrellas con un desvanecimiento sutil
        starTrail.forEach(star => {
          if (star.life < 255) {
            star.life += 2; // Aumenta gradualmente la "vida" (brillo)
          }
          
          p.noStroke();
          p.fill(star.brightness, star.brightness, star.brightness, star.alpha);
          p.ellipse(star.x, star.y, star.size, star.size);
          
          // Fade-in de las estrellas (aumenta la transparencia a medida que crecen)
          star.alpha = p.map(star.life, 0, 255, 0, 255); // La estrella se vuelve más visible a medida que vive
        });

        // Dibuja líneas entre las estrellas cercanas para formar constelaciones
        p.stroke(255, 255, 255, 80); // Color sutil para las líneas
        p.noFill();
        for (let i = 0; i < starTrail.length; i++) {
          for (let j = i + 1; j < starTrail.length; j++) {
            const distance = p.dist(starTrail[i].x, starTrail[i].y, starTrail[j].x, starTrail[j].y);
            if (distance < 150) { // Solo conecta estrellas cercanas
              p.line(starTrail[i].x, starTrail[i].y, starTrail[j].x, starTrail[j].y);
            }
          }
        }
      };

      // Reacción al movimiento del mouse
      p.mouseMoved = () => {
        // Solo empieza a agregar estrellas después de que el mouse se mueva y deje un rastro
        if (starTrail.length < 200) { // Limita la cantidad de estrellas
          starTrail.push(createStar(p.mouseX, p.mouseY));
        }

        // Redibuja el lienzo para actualizar las estrellas
        p.redraw();
      };

      // Limpia el canvas al hacer clic
      p.mousePressed = () => {
        starTrail.length = 0; // Elimina las estrellas
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
