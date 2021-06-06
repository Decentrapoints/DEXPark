export class ModelBuilders{
    private _name: string;
    //private _ticker: MarketTickers;
    constructor(name?: string){ this.setModelBuilder(name); }
    setModelBuilder = (name: string): void =>{ if(name) this._name = name; }
        // Build All 3D Models
        // buildAllModels = (_scene: Entity) =>{
        //     this.buildGrass(_scene);
        //     //this.buildExtraTickers(_scene);
        //     this.buildAllPriceTickers();
        //     this.buildDEXParkLights(_scene);
        //     this.buildPerimeterLights(_scene);
        //     //this.buildDEXCyberBuilding(_scene);
        // }
}