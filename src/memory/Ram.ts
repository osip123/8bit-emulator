

export default class Ram {
    private buffer:string[] = new Array<string>(8);
    
    public getVlaue(index: number): string {
        return this.buffer[index];
    }

    public setVlaue(index: number, value: string): void {
        this.buffer[index] = value;
    }

    public clear(index: number): void {
        this.buffer[index] = null;
    }

}