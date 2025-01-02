// export const Obra = ()=>{
//     return <div>
//         <h1>Opera Prima</h1>
//         <p>Acerca de la obra "opera prima"</p>
//         <p>Por acá puede estar embebido el código de la obra, funcionando.</p>
//     </div>
// }


import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const Obra = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let colors;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        colors = [p.color(255, 0, 0), p.color(0, 255, 0), p.color(0, 0, 255), p.color(255, 255, 0)];
        p.noLoop(); // Optimización: no dibuja continuamente por defecto
      };

      p.draw = () => {
        p.background(20);

        for (let i = 0; i < 100; i++) {
          const x = p.random(p.width);
          const y = p.random(p.height);
          const radius = p.random(10, 50);
          const col = p.random(colors);
          p.noStroke();
          p.fill(col);
          p.ellipse(x, y, radius, radius); // Dibuja círculos generativos
        }
      };

      // Reacción al movimiento del mouse
      p.mouseMoved = () => {
        const col = p.random(colors);
        const radius = p.random(20, 60);
        p.noStroke();
        p.fill(col);
        p.ellipse(p.mouseX, p.mouseY, radius, radius);
      };

      // Limpia el canvas al hacer clic
      p.mousePressed = () => {
        p.background(20);
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

  return (
    <div>
      <h1>Ópera Prima</h1>
      <p>Explora esta obra de arte generativo interactiva.</p>
      <div ref={sketchRef}></div>
    </div>
  );
};
