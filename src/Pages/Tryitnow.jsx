import React, { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import io from 'socket.io-client';
import '../../public/Css/try.css'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const socket = io('http://localhost:8080'); // Corrected server URL

function Tryitnow() {
  const navigate = useNavigate();
  const [canvas, setCanvas] = useState(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [isProUser, setIsProUser] = useState(false);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('c');
    setCanvas(newCanvas);
    canvasRef.current = newCanvas;

    newCanvas.freeDrawingBrush.color = 'black';
    newCanvas.freeDrawingBrush.width = 2;

    newCanvas.on('path:created', (event) => {
      const pathData = event.path.toJSON();
      const canvasImg = canvasRef.current.toDataURL();
      console.log(canvasImg);
      socket.emit('draw', canvasImg);
    });

    socket.on("canvasImage", (data) => {
      imgRef.current.src = data;
    });

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const handleUpgradeToPro = () => {
    setIsProUser(true);
    navigate('/upgradeplans');
  };

  const handleToggleDrawingMode = () => {
    setIsDrawingMode(prevMode => !prevMode);
    setIsEraserMode(false);

    if (canvas) {
      canvas.isDrawingMode = !canvas.isDrawingMode;
    }
  };

  const handleClearCanvas = () => {
    if (canvas) {
      canvas.clear();
    }
  };

  const handleColorChange = (e) => {
    if (canvas && !isEraserMode) {
      canvas.freeDrawingBrush.color = e.target.value;
    }
  };

  const handleBrushSizeChange = (e) => {
    if (canvas) {
      canvas.freeDrawingBrush.width = parseInt(e.target.value, 10);
    }
  };

  const handleDrawShape = (shapeType) => {
    if (canvas) {
      let shape;
      switch (shapeType) {
        case 'rectangle':
          shape = new fabric.Rect({
            width: 100,
            height: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 50,
            top: 50
          });
          break;
        case 'circle':
          shape = new fabric.Circle({
            radius: 30,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            left: 100,
            top: 100
          });
          break;
        default:
          break;
      }
      canvas.add(shape);
    }
  };

  const handleToggleEraserMode = () => {
    setIsEraserMode(prevMode => !prevMode);
    setIsDrawingMode(false);

    if (canvas) {
      canvas.isDrawingMode = false;

      if (!isEraserMode) {
        canvas.freeDrawingBrush.color = canvas.backgroundColor;
      } else {
        canvas.freeDrawingBrush.color = 'black';
      }
    }
  };

  return (
    <div className="canvas-container">
      <h1>CANVAS DRAWING</h1>
      <div className="canvas-controls">
        <button onClick={handleToggleDrawingMode}>
          {isDrawingMode ? 'Cancel drawing mode' : 'Enter drawing mode'}
        </button>
        <button onClick={handleToggleEraserMode}>
          {isEraserMode ? 'Exit eraser mode' : 'Enter eraser mode'}
        </button>
        <input type="color" onChange={handleColorChange} />
        <input type="range" min="1" max="50" onChange={handleBrushSizeChange} />
        <button onClick={() => handleDrawShape('rectangle')}>Draw Rectangle</button>
        <button onClick={() => handleDrawShape('circle')}>Draw Circle</button>
        <button id="clear-canvas" className="hidden" onClick={handleClearCanvas}>
          Clear Canvas
        </button>
        {/* <button onClick={handleUpgradeToPro}>Upgrade to Pro</button> */}
        {!isProUser && (
          <div className="pro-upgrade">
            <button onClick={handleUpgradeToPro}>Upgrade to Pro</button>
            <p>Unlock additional features with the Pro version!</p>
          </div>
        )}
      </div>
      <canvas
        id="c"
        style={{ height: "900px", width: "500px", border: "2px solid black" }}
        ref={canvasRef}
      ></canvas>
      <div><img style={{ height: "500px", width: "500px", border: "2px solid black" }} className="w-100 h-100" ref={imgRef} src="" alt="image" /></div>
    </div>
  );
}

export default Tryitnow;