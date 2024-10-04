export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this._evacuationWarningMessage = 'Class extending Building must override evacuationWarningMessage';
    throw new Error(this._evacuationWarningMessage);
  }
}
