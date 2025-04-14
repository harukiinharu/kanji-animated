const rotates = {
  '「': Math.PI / 2,
  '」': Math.PI / 2,
  '。': -Math.PI,
}

const translats = ['、']

type Context = {
  ctx: CanvasRenderingContext2D | null
  time: number
  vertical: boolean
}

let context: Context = {
  ctx: null,
  time: 0,
  vertical: true,
}

function requireContext() {
  return context.ctx!
}

export { rotates, context, requireContext, translats }
