import Tool from "./Tool";

export default class Line extends Tool {

    saved: string = "";
    currentX: number = 0;
    currentY: number = 0;


    constructor(canvas: HTMLCanvasElement | null) {
        super(canvas);
        this.listen()
    }

    listen() {
        if (this.canvas) {
            this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
            this.canvas.onmousedown = this.mouseDownHandler.bind(this)
            this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        }
    }

    mouseUpHandler(e: MouseEvent) {
        console.log(e.y)
        this.mouseDown = false
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.currentX = e.offsetX
        this.currentY = e.offsetY
        this.ctx?.beginPath()
        this.ctx?.moveTo(this.currentX, this.currentY)
        if (this.canvas)
            this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.offsetX, e.offsetY)
        }
    }

    draw(x: number, y: number) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            if (this.ctx && this.canvas){
                this.ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height)
                this.ctx.drawImage(img, 0, 0, this.canvas?.width, this.canvas?.height)
                this.ctx.beginPath()
                this.ctx.moveTo(this.currentX, this.currentY)
                this.ctx.lineTo(x, y)
                this.ctx.stroke()
            }
        }
    }
}