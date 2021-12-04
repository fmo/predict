import { Attributes } from "./Models/Attributes";

export interface GameProps {
  id?: number;
  homeTeamGuess?: number;
  awayTeamGuess?: number;
  awayTeam?: string;
  homeTeam?: string;
  gameTime?: string;
}

export class Game {

  public attributes: Attributes<GameProps>;

  constructor(attrs: GameProps) {
    this.attributes = new Attributes<GameProps>(attrs);
  }

  get get() {
    return this.attributes.get;
  }

  set(update: GameProps): void {
    this.attributes.set(update);
  }

}