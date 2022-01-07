import React, {useRef} from 'react'
import {Button, View} from 'react-native'
import Canvas, {CanvasRenderingContext2D} from 'react-native-canvas'
import {clientWidth} from '@src/global/const'
import scheduler from './scheduler'

const pixNums = [32, 32]

const baseStep = [
  [
    {x: 3, y: 30, color: '#f00'},
    {x: 4, y: 30, color: '#f00'},
    {x: 5, y: 30, color: '#f00'},
    {x: 6, y: 30, color: '#f00'},
    {x: 7, y: 30, color: '#f00'},
    {x: 8, y: 30, color: '#f00'},
    {x: 9, y: 30, color: '#f00'},
  ],
  [
    {x: 4, y: 25, color: '#f00'},
    {x: 5, y: 25, color: '#f00'},
    {x: 6, y: 25, color: '#f00'},
    {x: 7, y: 25, color: '#f00'},
    {x: 8, y: 25, color: '#f00'},
  ],
  [
    {x: 6, y: 30, color: '#f00'},
    {x: 6, y: 29, color: '#f00'},
    {x: 6, y: 28, color: '#f00'},
    {x: 6, y: 27, color: '#f00'},
    {x: 6, y: 26, color: '#f00'},
    {x: 6, y: 25, color: '#f00'},
    {x: 6, y: 24, color: '#f00'},
    {x: 6, y: 23, color: '#f00'},
    {x: 6, y: 22, color: '#f00'},
    {x: 6, y: 21, color: '#f00'},
    {x: 6, y: 20, color: '#f00'},
    {x: 6, y: 19, color: '#f00'},
    {x: 6, y: 18, color: '#f00'},
  ],
  [
    {x: 1, y: 18, color: '#f00'},
    {x: 2, y: 18, color: '#f00'},
    {x: 3, y: 18, color: '#f00'},
    {x: 4, y: 18, color: '#f00'},
    {x: 5, y: 18, color: '#f00'},
    {x: 6, y: 18, color: '#f00'},
    {x: 7, y: 18, color: '#f00'},
    {x: 8, y: 18, color: '#f00'},
    {x: 9, y: 18, color: '#f00'},
    {x: 10, y: 18, color: '#f00'},
    {x: 11, y: 18, color: '#f00'},
  ],
  [
    {x: 6, y: 1, color: '#f00'},
    {x: 7, y: 1, color: '#f00'},
    {x: 8, y: 1, color: '#f00'},
    {x: 9, y: 2, color: '#f00'},
    {x: 9, y: 3, color: '#f00'},
    {x: 9, y: 4, color: '#f00'},
    {x: 8, y: 5, color: '#f00'},
    {x: 7, y: 5, color: '#f00'},
    {x: 6, y: 5, color: '#f00'},
    {x: 5, y: 4, color: '#f00'},
    {x: 5, y: 3, color: '#f00'},
    {x: 5, y: 2, color: '#f00'},
  ],

  [
    {x: 5, y: 5, color: '#f0f'},
    {x: 6, y: 4, color: '#f0f'},
    {x: 7, y: 4, color: '#f0f'},
    {x: 8, y: 4, color: '#f0f'},
    {x: 9, y: 4, color: '#f0f'},
    {x: 10, y: 4, color: '#f0f'},
    {x: 11, y: 5, color: '#f0f'},
    {x: 12, y: 6, color: '#f0f'},
    {x: 13, y: 7, color: '#f0f'},
    {x: 13, y: 8, color: '#f0f'},
    {x: 13, y: 9, color: '#f0f'},
    {x: 13, y: 10, color: '#f0f'},
    {x: 13, y: 11, color: '#f0f'},
    {x: 12, y: 12, color: '#f0f'},
    {x: 11, y: 13, color: '#f0f'},
    {x: 10, y: 14, color: '#f0f'},
    {x: 9, y: 14, color: '#f0f'},
    {x: 8, y: 14, color: '#f0f'},
    {x: 7, y: 14, color: '#f0f'},
    {x: 6, y: 14, color: '#f0f'},
    {x: 5, y: 13, color: '#f0f'},
    {x: 4, y: 12, color: '#f0f'},
    {x: 3, y: 11, color: '#f0f'},
    {x: 3, y: 10, color: '#f0f'},
    {x: 3, y: 9, color: '#f0f'},
    {x: 3, y: 8, color: '#f0f'},
    {x: 3, y: 7, color: '#f0f'},
    {x: 4, y: 6, color: '#f0f'},
  ],
]

const EXCanvas = () => {
  const canvasRef = useRef<CanvasRenderingContext2D>()
  const [width, height] = [Math.floor(clientWidth), Math.floor(clientWidth)]
  const pixelWidth = width / pixNums[0]
  const pixelHeight = height / pixNums[0]
  const rcn = pixNums[0]

  const handleCanvas = (canvas: Canvas) => {
    if (!canvas) return
    const ctx = canvas?.getContext?.('2d') || {}
    if (!ctx) return
    canvas.width = Math.floor(clientWidth)
    canvas.height = Math.floor(clientWidth)
    canvasRef.current = ctx

    initCanvasCells()
  }

  // 初始化棋盘
  const initCanvasCells = () => {
    const ctx = canvasRef.current!
    ctx.fillStyle = '#ccc'
    ctx.fillRect(2, 2, width - 4, height)
    ctx.translate(0, height)
    ctx.rotate((180 / 180) * Math.PI)
    ctx.scale(-1, 1)

    for (let i = 0; i < rcn; i++) {
      for (let j = 0; j < rcn; j++) {
        ctx.fillStyle = '#fff'
        ctx.fillRect?.(i * pixelWidth, j * pixelHeight, pixelWidth - 2, pixelHeight - 2)
      }
    }
    // console.error(box, '----- box ----')
  }

  // 开始画画
  const drawingInfo = () => {
    const ctx = canvasRef.current!
    baseStep.forEach(step => {
      step.forEach(path => {
        const {x, y, color} = path
        scheduler.call(() => {
          ctx.fillStyle = color
          ctx.fillRect?.(x * pixelWidth, y * pixelHeight, pixelWidth - 2, pixelHeight - 2)
        })
      })
    })
  }

  return (
    <View>
      <Canvas ref={handleCanvas} />
      <Button onPress={drawingInfo} title="hello world!">
        点我啊铺盖
      </Button>
    </View>
  )
}

export default EXCanvas
