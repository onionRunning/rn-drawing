import React, {useEffect, useRef, useState} from 'react'
import {View} from 'react-native'
import Canvas, {CanvasRenderingContext2D} from 'react-native-canvas'
import {clientWidth} from '@src/global/const'
import scheduler from './scheduler'
import {baseStep, styles} from './utils'

const pixNums = [32, 32]
interface Props {
  // 开始绘画
  isStart?: boolean
  // 开始清除画板
  isInit?: boolean
}

const EXCanvas = (props: Props) => {
  const {isStart, isInit} = props
  const canvasRef = useRef<CanvasRenderingContext2D>()
  const ref = useRef<Canvas>()
  const [isInitActive, setInitActive] = useState(false)
  const [initSuccess, setInitSuccess] = useState(false)
  const [width, height] = [Math.floor(clientWidth), Math.floor(clientWidth)]
  const pixelWidth = width / pixNums[0]
  const pixelHeight = height / pixNums[0]
  const rcn = pixNums[0]

  useEffect(() => {
    if (isStart) {
      drawingInfo()
    }
  }, [isStart])

  useEffect(() => {
    if (isInit) {
      clearDraw()
      console.log('执行次数!')
    }
  }, [isInit])

  // 初始化画布
  useEffect(() => {
    if (initSuccess) {
      const ctx = ref.current?.getContext?.('2d')
      if (!ctx) return
      canvasRef.current = ctx
    }
  }, [initSuccess])

  const initCanvas = (canvas: Canvas) => {
    if (!canvas) return
    if (isInitActive) return
    ref.current = canvas
    setInitSuccess(true)

    const ctx = canvas?.getContext?.('2d') || {}
    if (!ctx) return
    canvas.width = width
    canvas.height = height
    canvasRef.current = ctx
    initCanvasCells()
  }

  // 初始化棋盘 利用横竖线进行相交
  const initCanvasCells = () => {
    const ctx = canvasRef.current!
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, width, height)
    ctx.translate(0, height)
    ctx.rotate((180 / 180) * Math.PI)
    ctx.scale(-1, 1)
    ctx.lineWidth = 1
    for (let i = 0; i < rcn; i++) {
      ctx.beginPath()
      ctx.strokeStyle = '#ccc'
      ctx.moveTo(i * pixelWidth, 0)
      ctx.lineTo(i * pixelWidth, height)
      ctx.stroke()
    }
    ctx.lineWidth = 1
    for (let i = 0; i < rcn; i++) {
      ctx.beginPath()
      ctx.moveTo(0, i * pixelHeight)
      ctx.lineTo(width, i * pixelWidth)
      ctx.stroke()
    }
    setInitActive(true)
  }

  const clearDraw = () => {
    const ctx = canvasRef.current!
    baseStep.forEach(step => {
      step.forEach(path => {
        const {x, y} = path
        ctx.fillStyle = '#fff'
        ctx.fillRect?.(x * pixelWidth + 0.5, y * pixelHeight + 0.5, pixelWidth - 1, pixelHeight - 1)
      })
    })
  }

  // 开始画画
  const drawingInfo = () => {
    const ctx = canvasRef.current!
    baseStep.forEach(step => {
      step.forEach(path => {
        const {x, y, color} = path
        scheduler.call(() => {
          ctx.fillStyle = color
          ctx.fillRect?.(
            x * pixelWidth + 0.5,
            y * pixelHeight + 0.5,
            pixelWidth - 1,
            pixelHeight - 1
          )
        })
      })
    })
  }

  return (
    <View style={styles.container}>
      <Canvas ref={initCanvas} />
    </View>
  )
}

export default EXCanvas
