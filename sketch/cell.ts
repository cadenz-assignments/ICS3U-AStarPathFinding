class Cell {
  public static cellWidth: number = 16;
  public static cellHeight: number = 16;
  
  private readonly _position: Position;
  private _isObstructed: boolean;
  public parent: Cell;
  public fCost: number;
  public gCost: number;
  public hCost: number;

  constructor(position: Position) {
    this._position = position;
    this._isObstructed = false;
    this.parent = null;
    this.fCost = 0;
    this.gCost = 0;
    this.hCost = 0;
  }

  public render(color: any) {
    if (this._isObstructed) {
      fill(0);
    } else {
      fill(color);
    }
    noStroke();
    rect(this._position.trueX, this._position.trueY, Cell.cellWidth - 1, Cell.cellHeight - 1);
  }

  public get position() {
    return this._position;
  }

  public toggleObstructed() {
    this._isObstructed = !this._isObstructed;
  }

  public get isObstructed() {
    return this._isObstructed;
  }
}