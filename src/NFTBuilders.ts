export class NFTBuilders{
    private _name: string;
    constructor(name: string){ this.setNFTBuilders(name); }   
    setNFTBuilders = (name: string): void =>{ if(name) this._name = name; }
    buildDCLPlotNFTs(_scene: Entity){
        const dclPlotNFT = new Entity('-66,-107_E');
        engine.addEntity(dclPlotNFT);
        dclPlotNFT.setParent(_scene);
        const dclPlotTrans = new Transform({
          position: new Vector3(1, 10.5, 7.85),
          rotation: new Quaternion(0, 1, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dclPlotNFT.addComponentOrReplace(dclPlotTrans);
        const dclPlotNFTShape = new NFTShape("ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907831151630815779563914338234524848195895189");
        dclPlotNFTShape.withCollisions = true;
        dclPlotNFTShape.isPointerBlocker = true;
        dclPlotNFTShape.visible = true;
        dclPlotNFT.addComponentOrReplace(dclPlotNFTShape);

        // DCLPlot_2
        const dclPlotNFT_2 = new Entity('-66,-108_W');
        engine.addEntity(dclPlotNFT_2);
        dclPlotNFT_2.setParent(_scene);
        const dclPlotTrans_2 = new Transform({
          position: new Vector3(7.5, 10.5, 1),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dclPlotNFT_2.addComponentOrReplace(dclPlotTrans_2);
        const dclPlotNFTShape_2 = new NFTShape("ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907831151630815779563914338234524848195895188");
        dclPlotNFTShape_2.withCollisions = true;
        dclPlotNFTShape_2.isPointerBlocker = true;
        dclPlotNFTShape_2.visible = true;
        dclPlotNFT_2.addComponentOrReplace(dclPlotNFTShape_2);

        // DCLPlot_3
        const dclPlotNFT_3 = new Entity('-65,-107_N');
        engine.addEntity(dclPlotNFT_3);
        dclPlotNFT_3.setParent(_scene);
        const dclPlotTrans_3 = new Transform({
          position: new Vector3(7.5, 10.5, 15),
          rotation: new Quaternion(0, 360, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dclPlotNFT_3.addComponentOrReplace(dclPlotTrans_3);
        const dclPlotNFTShape_3 = new NFTShape("ethereum://0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/115792089237316195423570985008687907831491913182700502377801609132279964106645");
        dclPlotNFTShape_3.withCollisions = true;
        dclPlotNFTShape_3.isPointerBlocker = true;
        dclPlotNFTShape_3.visible = true;
        dclPlotNFT_3.addComponentOrReplace(dclPlotNFTShape_3);

        const dclPlotNFT_4 = new Entity('-65,-107_N');
        engine.addEntity(dclPlotNFT_4);
        dclPlotNFT_4.setParent(_scene);
        const dclPlotTrans_4 = new Transform({
            position: new Vector3(15.5, 10.5, 7.85),
            rotation: new Quaternion(0, -1, 0, 1),
            scale: new Vector3(3, 3, 3)
        });
        dclPlotNFT_4.addComponentOrReplace(dclPlotTrans_4);
        const dclPlotNFTShape_4 = new NFTShape("ethereum://0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/98177545468236430856958537284420898173665964712357452552107091512532699139200");
        dclPlotNFTShape_4.withCollisions = true;
        dclPlotNFTShape_4.isPointerBlocker = true;
        dclPlotNFTShape_4.visible = true;
        dclPlotNFT_4.addComponentOrReplace(dclPlotNFTShape_4);
    }
}