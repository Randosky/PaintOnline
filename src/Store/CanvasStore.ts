import {makeAutoObservable} from "mobx";

class CanvasStore {

    canvas: HTMLCanvasElement | null = null
    undoList: string[] = []
    redoList: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement | null) {
        this.canvas = canvas;
    }

    pushToUndo(data: string) {
        this.undoList.push(data);
    }

    pushToRedo(data: string) {
        this.redoList.push(data);
    }

    undo() {
        const ctx = this.canvas?.getContext("2d")
        if (this.canvas && ctx && this.undoList.length > 0) {
            const dataUrl = this.undoList.pop()
            this.pushToRedo(this.canvas.toDataURL())
            this.reRenderCanvasImage(dataUrl, ctx)
        }
    }

    redo() {
        const ctx = this.canvas?.getContext("2d")
        if (this.redoList.length > 0 && this.canvas && ctx) {
            const dataUrl = this.redoList.pop()
            this.pushToUndo(this.canvas.toDataURL())
            this.reRenderCanvasImage(dataUrl, ctx)
        }
    }

    reRenderCanvasImage(dataUrl: string | undefined, ctx: CanvasRenderingContext2D) {
        const img = new Image()
        img.src = dataUrl || ""
        img.onload = () => {
            if (this.canvas) {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
}

export default new CanvasStore()