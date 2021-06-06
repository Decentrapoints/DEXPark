import { PriceTracker } from "./marketAPI/priceTracker";
import { PriceUpdateSystem } from "./marketAPI/priceUpdateSystem";
import { MarketTickers } from "./marketAPI/marketTickers";
export class ModelBuilders{
    private _name: string;
    private _ticker: MarketTickers;
    constructor(name?: string){ this.setModelBuilder(name); }
    setModelBuilder = (name: string): void =>{ if(name) this._name = name; }

    buildGrass = (_scene: Entity)=>{
        const entity = new Entity('entity');
        engine.addEntity(entity);
        entity.setParent(_scene);
        const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb");
        gltfShape.withCollisions = true;
        gltfShape.isPointerBlocker = true;
        gltfShape.visible = true;
        entity.addComponentOrReplace(gltfShape)
        const transform2 = new Transform({
            position: new Vector3(8, 0, 8),
            rotation: new Quaternion(0, 0, 0, 1),
            scale: new Vector3(1, 1, 1)
        });
        entity.addComponentOrReplace(transform2);
    }
    
    buildPerimeterLights = (_scene: Entity) =>{
        // Lower Level Perimeter LightBar
        const dPPer = new Entity('dPPerimeter');
        engine.addEntity(dPPer);
        dPPer.setParent(_scene);
        const dpTrans = new Transform({
            position: new Vector3(8, 1.3, 8),
            rotation: new Quaternion(0, 0, 0, 1),
            scale: new Vector3(1, 1, 1)
        });
        dPPer.addComponentOrReplace(dpTrans);
        const dpShape = new GLTFShape("models/lights/DEXParkPerLBs.glb");
        dpShape.withCollisions = true;
        dpShape.isPointerBlocker = true;
        dpShape.visible = true;
        dPPer.addComponentOrReplace(dpShape);
    }

    // DEX Park Cyberbuilding 
    buildDEXCyberBuilding = (_scene: Entity) => {
      const cyber = new Entity('cyberBuilding');
      engine.addEntity(cyber);
      cyber.setParent(_scene);
      const cyberTrans = new Transform({
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(.75, .75, .75)
      });
      cyber.addComponentOrReplace(cyberTrans);
      const cyberShape = new GLTFShape("models/DXP/DXPB.glb");
      cyberShape.withCollisions = true;
      cyberShape.isPointerBlocker = true;
      cyberShape.visible = true;
      cyber.addComponentOrReplace(cyberShape);
    }

    // DEX Park Lights
    buildDEXParkLights = (_scene: Entity) =>{
        const dexLight = new Entity('DEXLights');
        engine.addEntity(dexLight);
        dexLight.setParent(_scene);
        const dexTrans = new Transform({
          position: new Vector3(14, 7, 15),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dexLight.addComponentOrReplace(dexTrans);
        const dexLShape = new GLTFShape("models/lights/DXP_AM.glb");
        dexLShape.withCollisions = true;
        dexLShape.isPointerBlocker = true;
        dexLShape.visible = true;
        dexLight.addComponentOrReplace(dexLShape);

        // DL3
        const dexLight_3 = new Entity('DEXLights');
        engine.addEntity(dexLight_3);
        dexLight_3.setParent(_scene);
        const dex3Trans = new Transform({
          position: new Vector3(1, 7, 13),
          rotation: new Quaternion(0, -1, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dexLight_3.addComponentOrReplace(dex3Trans);
        const dexL3Shape = new GLTFShape("models/lights/DXP_BP.glb");
        dexL3Shape.withCollisions = true;
        dexL3Shape.isPointerBlocker = true;
        dexL3Shape.visible = true;
        dexLight_3.addComponentOrReplace(dexL3Shape);

        // W DEX Light
        const dexLight_1 = new Entity('DEXLights');
        engine.addEntity(dexLight_1);
        dexLight_1.setParent(_scene);
        const dexTrans_1 = new Transform({
          position: new Vector3(15.5, 7, 3.5),
          rotation: new Quaternion(0, 1, 0, 1),
          scale: new Vector3(3, 3, 3)
        });
        dexLight_1.addComponentOrReplace(dexTrans_1);
        const dexL1Shape = new GLTFShape("models/lights/DXP_OG.glb");
        dexL1Shape.withCollisions = true;
        dexL1Shape.isPointerBlocker = true;
        dexL1Shape.visible = true;
        dexLight_1.addComponentOrReplace(dexL1Shape);

        // E DEX Light
        const dexLight_2 = new Entity('DEXLights');
        engine.addEntity(dexLight_2);
        dexLight_2.setParent(_scene);
        const dexTrans_2 = new Transform({
            position: new Vector3(3, 7, 1),
            rotation: new Quaternion(0, 90, 0, 1),
            scale: new Vector3(3, 3, 3)
        });
        dexLight_2.addComponentOrReplace(dexTrans_2);
        const dexL2Shape = new GLTFShape("models/lights/DXP_GB.glb");
        dexL1Shape.withCollisions = true;
        dexL1Shape.isPointerBlocker = true;
        dexL1Shape.visible = true;
        dexLight_2.addComponentOrReplace(dexL2Shape);
    }

    // BuildKN1 (1, 2, 3):
    buildKNCTicker = (_scene: Entity) =>{
        const knc = new Entity('knc');
        engine.addEntity(knc);
        knc.setParent(_scene);
        const kncTrans = new Transform({
          position: new Vector3(15, 2.8, 10),
          rotation: new Quaternion(0, -1, 0, 1),
          scale: new Vector3(.55, .55, 1)
        });
        knc.addComponentOrReplace(kncTrans);
        const kncShape = new GLTFShape("models/marketTicker/KNCTickerLogo.glb");
        kncShape.withCollisions = true;
        kncShape.isPointerBlocker = true;
        kncShape.visible = true;
        knc.addComponentOrReplace(kncShape);
    }
    buildNEOTicker = (_scene: Entity) =>{
      const neo = new Entity('neo');
      engine.addEntity(neo);
      neo.setParent(_scene);
      const neoTrans = new Transform({
        position: new Vector3(15, 1.75, 10),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(.55, .55, 1)
      });
      neo.addComponentOrReplace(neoTrans);
      const neoShape = new GLTFShape("models/marketTicker/NEOTickerLogo.glb");
      neoShape.withCollisions = true;
      neoShape.isPointerBlocker = true;
      neoShape.visible = true;
      neo.addComponentOrReplace(neoShape);
    }
    build1INCHTicker = (_scene: Entity) =>{
      const inch1 = new Entity('1INCH');
      engine.addEntity(inch1);
      inch1.setParent(_scene);
      const inchTrans = new Transform({
        position: new Vector3(15, 2.44, 10),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(.5, .5, 1)
      });
      inch1.addComponentOrReplace(inchTrans);
      const inch1Shape = new GLTFShape("models/marketTicker/1INCHTickerLogo.glb");
      inch1Shape.withCollisions = true;
      inch1Shape.isPointerBlocker = true;
      inch1Shape.visible = true;
      inch1.addComponentOrReplace(inch1Shape);
    }

    // BuildBAP (1, 2, 3):
    buildPOLKATicker = (_scene: Entity) =>{
      const polka = new Entity('polka');
      engine.addEntity(polka);
      polka.setParent(_scene);
      const polkaTrans = new Transform({
        position: new Vector3(1.09, 1.75, 7),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(.55, .55, 1)
      });
      polka.addComponentOrReplace(polkaTrans);
      const polkaShape = new GLTFShape("models/marketTicker/POLKATickerLogo.glb");
      polkaShape.withCollisions = true;
      polkaShape.isPointerBlocker = true;
      polkaShape.visible = true;
      polka.addComponentOrReplace(polkaShape);
    }
    buildADATicker = (_scene: Entity) =>{
      const ada = new Entity('ada');
      engine.addEntity(ada);
      ada.setParent(_scene);
      const adaTrans = new Transform({
        position: new Vector3(1.09, 2.3, 7),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(.55, .55, 1)
      });
      ada.addComponentOrReplace(adaTrans);
      const adaShape = new GLTFShape("models/marketTicker/ADATickerLogo.glb");
      adaShape.withCollisions = true;
      adaShape.isPointerBlocker = true;
      adaShape.visible = true;
      ada.addComponentOrReplace(adaShape);
    }
    buildBNBTicker = (_scene: Entity) =>{
      const bnb = new Entity('bnb');
      engine.addEntity(bnb);
      bnb.setParent(_scene);
      const bnbTrans = new Transform({
        position: new Vector3(1.09, 2.85, 7),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(.52, .52, 1)
      });
      bnb.addComponentOrReplace(bnbTrans);
      const bnbShape = new GLTFShape("models/marketTicker/BNBTickerLogo.glb");
      bnbShape.withCollisions = true;
      bnbShape.isPointerBlocker = true;
      bnbShape.visible = true;
      bnb.addComponentOrReplace(bnbShape);
    }

    buildBEMPriceTicker = () =>{
      // Set up price trackers.
      let trackers = [
        new PriceTracker(
          new GLTFShape("models/marketTicker/btcTickerLogo.glb"),
          "BTCUSD",
          new Transform({ position: new Vector3(-4, 1, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/ethTickerLogo.glb"),
          "ETHUSD",
          new Transform({ position: new Vector3(-4, 0, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/dclTickerLogo.glb"),
          "MANAUSD",
          new Transform({ position: new Vector3(-4, -1, -0.01) })),
      ];
      //Create update system to update the trackers and the time.
      engine.addSystem(new PriceUpdateSystem(trackers));

      // 3D Asset to attach data to.
      const backboard = new Entity();
      backboard.addComponent(new GLTFShape("models/marketTicker/backboard.glb"));
      backboard.addComponent(new Transform({ 
        position: new Vector3(8, 0.2, 14),
        rotation: Quaternion.Euler(90, 0, 0),
        scale: new Vector3(.5, .5, .5)
      })); engine.addEntity(backboard);

      for(let i = 0; i < trackers.length; i++)
        trackers[i].setParent(backboard);
    }
    buildBAPPriceTicker = () =>{
      // Set up price trackers.
      let trackers_1 = [
        new PriceTracker(
          new GLTFShape("models/marketTicker/btcTickerLogo.glb"),
          "BNBUSD",
          new Transform({ position: new Vector3(-4, 1, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/ethTickerLogo.glb"),
          "POLKUSD",
          new Transform({ position: new Vector3(-4, 0, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/dclTickerLogo.glb"),
          "ADAUSD",
          new Transform({ position: new Vector3(-4, -1, -0.01) })),
      ];
      //Create update system to update the trackers and the time.
      engine.addSystem(new PriceUpdateSystem(trackers_1));

      // 3D Asset to attach data to.
      const backboard_1 = new Entity();
      backboard_1.addComponent(new GLTFShape("models/marketTicker/backboard.glb"));
      backboard_1.addComponent(new Transform({ 
        position: new Vector3(1, 4, 9),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(.5, .5, .5)
      })); engine.addEntity(backboard_1);

      for(let j = 0; j < trackers_1.length; j++)
        trackers_1[j].setParent(backboard_1);
    }
    buildK1NPriceTicker = () =>{
      // Set up price trackers.
      let trackers_2 = [
        new PriceTracker(
          new GLTFShape("models/marketTicker/BTCTickerLogo.glb"),
          "KNCUSD",
          new Transform({ position: new Vector3(-4, 1, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/ETHTickerLogo.glb"),
          "INCHUSD",
          new Transform({ position: new Vector3(-4, 0, -0.01) })),
        new PriceTracker(
          new GLTFShape("models/marketTicker/DCLTickerLogo.glb"),
          "NEOUSD",
          new Transform({ position: new Vector3(-4, -1, -0.01) })),
      ];
      //Create update system to update the trackers and the time.
      engine.addSystem(new PriceUpdateSystem(trackers_2));

      // 3D Asset to attach data to.
      const backboard_2 = new Entity();
      backboard_2.addComponent(new GLTFShape("models/marketTicker/backboard.glb"));
      backboard_2.addComponent(new Transform({ 
        position: new Vector3(15, 4, 8),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(.5, .5, .5)
      })); engine.addEntity(backboard_2);

      for(let k = 0; k < trackers_2.length; k++)
        trackers_2[k].setParent(backboard_2);
    }

    buildExtraTickers = (_scene)=>{
      this.buildKNCTicker(_scene);
      this.buildNEOTicker(_scene);
      this.buildPOLKATicker(_scene);
      this.build1INCHTicker(_scene);
      this.buildADATicker(_scene);
      this.buildBNBTicker(_scene);
    }
    buildAllPriceTickers = () =>{
      //this.buildBAPPriceTicker();
      this.buildBEMPriceTicker();
      //this.buildK1NPriceTicker();
    }
    // Build All 3D Models
    buildAllModels = (_scene: Entity) =>{
        this.buildGrass(_scene);
        //this.buildExtraTickers(_scene);
        this.buildAllPriceTickers();
        this.buildDEXParkLights(_scene);
        this.buildPerimeterLights(_scene);
        //this.buildDEXCyberBuilding(_scene);
    }
}