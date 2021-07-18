// DCP DEX Park
//import { UGUI } from "./GUI";
import { ModelBuilders } from "./ModelBuilders";
const _scene = new Entity('_scene');
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

const entity = new Entity('entity');
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb");
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
entity.addComponentOrReplace(transform2);

// DXP LightBars
const dexParkPerLbs = new Entity('dexParkPerLbs');
engine.addEntity(dexParkPerLbs);
dexParkPerLbs.setParent(_scene);
const dPPLTrans = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
dexParkPerLbs.addComponentOrReplace(dPPLTrans);
const dPPLShape = new GLTFShape("models/DEXParkPerLBs.glb");
dPPLShape.withCollisions = true;
dPPLShape.isPointerBlocker = true;
dPPLShape.visible = true;
dexParkPerLbs.addComponentOrReplace(dPPLShape);

// DXP Sign Blue/Purple
const dxpBP = new Entity('dxpBP');
engine.addEntity(dxpBP);
dxpBP.setParent(_scene);
const dxpBPTrans = new Transform({
  position: new Vector3(14.8, 5, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
});
dxpBP.addComponentOrReplace(dxpBPTrans);
const dxpBPShape = new GLTFShape("models/DXP_BP.glb");
dxpBPShape.withCollisions = true;
dxpBPShape.isPointerBlocker = true;
dxpBPShape.visible = true;
dxpBP.addComponentOrReplace(dxpBPShape);

// DXP Sign Green/Blue
const dxpGB = new Entity('dxpGB');
engine.addEntity(dxpGB);
dxpGB.setParent(_scene);
const dxpGBTrans = new Transform({
  position: new Vector3(1, 5, 15.3),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4, 4, 4)
})
dxpGB.addComponentOrReplace(dxpGBTrans)
const dxpGBShape = new GLTFShape("models/DXP_GB.glb")
dxpGBShape.withCollisions = true
dxpGBShape.isPointerBlocker = true
dxpGBShape.visible = true
dxpGB.addComponentOrReplace(dxpGBShape)

const dxpAM = new Entity('dxpAM')
engine.addEntity(dxpAM)
dxpAM.setParent(_scene)
const dxpAMTrans = new Transform({
  position: new Vector3(0.4, 5, 0.9999999403953552),
  rotation: new Quaternion(-5.7769201308201495e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(4, 4, 4)
});
dxpAM.addComponentOrReplace(dxpAMTrans);
const dxpAMShape = new GLTFShape("models/DXP_AM.glb");
dxpAMShape.withCollisions = true;
dxpAMShape.isPointerBlocker = true;
dxpAMShape.visible = true;
dxpAM.addComponentOrReplace(dxpAMShape);

// DXP Sign Orange/Green
const dxpOG = new Entity('dxpOG');
engine.addEntity(dxpOG);
dxpOG.setParent(_scene);
const dxpOGTrans = new Transform({
  position: new Vector3(15, 5, 1.35),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4, 4, 4)
});
dxpOG.addComponentOrReplace(dxpOGTrans)
const dxpOGShape = new GLTFShape("models/DXP_OG.glb")
dxpOGShape.withCollisions = true
dxpOGShape.isPointerBlocker = true
dxpOGShape.visible = true
dxpOG.addComponentOrReplace(dxpOGShape);

// ZeNFT NFT
const zeNFT = new Entity('zeNFT');
engine.addEntity(zeNFT);
zeNFT.setParent(_scene);
const zeT = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0),
  scale: new Vector3(3, 3, 3)
});
zeNFT.addComponentOrReplace(zeT);
const zeNFTShape = new GLTFShape("models/zeNFTDec2_coll.glb");
zeNFTShape.withCollisions = true;
zeNFTShape.isPointerBlocker = true;
zeNFTShape.visible = true;
zeNFT.addComponentOrReplace(zeNFTShape);

// Glass Corner Model
const glassCorner = new Entity('glassCorner');
engine.addEntity(glassCorner);
glassCorner.setParent(_scene);
const gC = new Transform({
  position: new Vector3(15.9, -.1, 0.1),
  rotation: new Quaternion(0, -1, 0),
  scale: new Vector3(1, 3, 1)
});
glassCorner.addComponentOrReplace(gC);
const glassShape = new GLTFShape("models/cornerGlass.glb");
glassShape.withCollisions = true;
glassShape.isPointerBlocker = true;
glassShape.visible = true;
glassCorner.addComponentOrReplace(glassShape);
// Build 3D Models
//let mB = new ModelBuilders("Models");
//mB.buildAllModels(_scene);

// Build User GUI
//let ugui = new UGUI("UserGUI"); 
//ugui.DEXParkGUI();
