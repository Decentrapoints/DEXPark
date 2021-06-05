
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const swissgalleryv = new Entity('swissgalleryv')
engine.addEntity(swissgalleryv)
swissgalleryv.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swissgalleryv.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/G 5 - Black.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
swissgalleryv.addComponentOrReplace(gltfShape2)

const swissgalleryv2 = new Entity('swissgalleryv2')
engine.addEntity(swissgalleryv2)
swissgalleryv2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swissgalleryv2.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/G 12 - Black.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
swissgalleryv2.addComponentOrReplace(gltfShape3)

const swissgalleryv3 = new Entity('swissgalleryv3')
engine.addEntity(swissgalleryv3)
swissgalleryv3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swissgalleryv3.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/SG 1 - Gray.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
swissgalleryv3.addComponentOrReplace(gltfShape4)

const swissgalleryv4 = new Entity('swissgalleryv4')
engine.addEntity(swissgalleryv4)
swissgalleryv4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swissgalleryv4.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/G 14 - Black.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
swissgalleryv4.addComponentOrReplace(gltfShape5)

const swissgalleryv5 = new Entity('swissgalleryv5')
engine.addEntity(swissgalleryv5)
swissgalleryv5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
swissgalleryv5.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("models/G 13 - Black.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
swissgalleryv5.addComponentOrReplace(gltfShape6)

const swissgalleryv6 = new Entity('swissgalleryv6')
engine.addEntity(swissgalleryv6)
swissgalleryv6.setParent(_scene)
swissgalleryv6.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(8, 6, 8),
  rotation: new Quaternion(-3.047385680929847e-14, -2.2351741790771484e-8, -3.552713678800501e-15, -1),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
swissgalleryv6.addComponentOrReplace(transform8)

const sgGray2 = new Entity('sgGray2')
engine.addEntity(sgGray2)
sgGray2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sgGray2.addComponentOrReplace(transform9)
const gltfShape7 = new GLTFShape("models/SG 2 - Gray.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
sgGray2.addComponentOrReplace(gltfShape7)

const sgGray = new Entity('sgGray')
engine.addEntity(sgGray)
sgGray.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(8, 6, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sgGray.addComponentOrReplace(transform10)
sgGray.addComponentOrReplace(gltfShape7)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(14.5, 6.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
loveseat.addComponentOrReplace(transform11)
const gltfShape8 = new GLTFShape("models/Couch_01/Couch_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
loveseat.addComponentOrReplace(gltfShape8)

const sgGreen = new Entity('sgGreen')
engine.addEntity(sgGreen)
sgGreen.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sgGreen.addComponentOrReplace(transform12)
const gltfShape9 = new GLTFShape("models/SG7 Green.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
sgGreen.addComponentOrReplace(gltfShape9)

const sgGreenGlass = new Entity('sgGreenGlass')
engine.addEntity(sgGreenGlass)
sgGreenGlass.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sgGreenGlass.addComponentOrReplace(transform13)
const gltfShape10 = new GLTFShape("models/SG4 Green Glass.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
sgGreenGlass.addComponentOrReplace(gltfShape10)

const sgGreen2 = new Entity('sgGreen2')
engine.addEntity(sgGreen2)
sgGreen2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sgGreen2.addComponentOrReplace(transform14)
const gltfShape11 = new GLTFShape("models/SG10 Green.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
sgGreen2.addComponentOrReplace(gltfShape11)
