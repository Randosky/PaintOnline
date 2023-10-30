import Tool from "./Tool";

export default class Circle extends Tool {

    startX: number = 0;
    startY: number = 0;
    saved: string = "";

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
        this.ctx?.beginPath()
        this.startX = e.offsetX;
        this.startY = e.offsetY;
        if (this.canvas)
            this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            const currentX: number = e.offsetX;
            const currentY: number = e.offsetY;
            const width: number = currentX - this.startX;
            const height: number = currentY - this.startY;
            const r = Math.sqrt(width**2 + height**2)

            this.draw(this.startX, this.startY, r)
        }
    }

    draw(x: number, y: number, r: number) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            if (this.ctx && this.canvas){
                this.ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height)
                this.ctx.drawImage(img, 0, 0, this.canvas?.width, this.canvas?.height)
                this.ctx?.beginPath()
                this.ctx?.arc(x, y, r, 0, 2*Math.PI)
                this.ctx?.fill()
                this.ctx?.stroke()
            }
        }
    }
}