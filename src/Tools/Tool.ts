export default class Tool {

    canvas: HTMLCanvasElement | null = null
    ctx: CanvasRenderingContext2D | null = null
    mouseDown: boolean = false

    constructor(canvas: HTMLCanvasElement | null) {
        this.canvas = canvas
        if (canvas) {
            this.ctx = canvas.getContext("2d")
            this.destroyEvents()
        }
    }

    set fillColor(color: string) {
        if (this.ctx)
            this.ctx.fillStyle = color
    }
    set strokeColor(color: string) {
        if (this.ctx)
            this.ctx.strokeStyle = color
    }

    set lineWidth(width: number) {
        if (this.ctx)
            this.ctx.lineWidth = width
    }

    destroyEvents() {
        if (this.canvas) {
            this.canvas.onmousemove = null
            this.canvas.onmousedown = null
            this.canvas.onmouseup = null
        }
    }
}