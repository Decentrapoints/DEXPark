// import * as ui from '@dcl/ui-scene-utils';
// import * as util from '@dcl/ecs-scene-utils';
// import { getUserData, UserData } from '@decentraland/Identity'
// //import { isPreviewMode } from '@decentraland/EnvironmentAPI'
// //import { movePlayerTo } from '@decentraland/RestrictedActions'
// export class UGUI{
//     private _name: string;
//     private _lastVisit: string;
//     constructor(name?: string){ this.setGUIBuilder(name); }
//     setGUIBuilder = (name: string): void =>{
//         if(name) this._name = name;
//     }

//     DEXParkGUI(){
//         let userData: UserData; let theName: string; let the0x: string;
//         async function fetchUserData() {
//             const data = await getUserData();
//             if (data) log(data.displayName, "\n"); log(data.publicKey);
//             const name: string = userData.displayName; const a0x: string = userData.publicKey;
//             theName = name; the0x = a0x;
//             return data;
//         }
//         async function setUserData() {
//             const data = await getUserData();
//             if (data) {
//                 userData = data;
//                 const name: string = userData.displayName;
//                 const a0x: string = userData.publicKey;
//                 theName = name; the0x = a0x;
//                 log(theName, the0x);
//             }
//         }
//         async function bringDetails(){ if(!userData) await setUserData(); }
//         bringDetails(); fetchUserData(); // Set & Receive the user data.
        
//         // Build UI Border & Style
//         let myUI = new ui.CustomPrompt(ui.PromptStyles.DARK, 300, 150, false);
//         myUI.background.positionX = 500; myUI.background.positionY = -225; myUI.background.opacity = 0.8;
//         //myUI.closeIcon.onClick = new OnClick(()=>{ myUI.hide(); });
//         myUI.closeIcon.positionX = 625; myUI.closeIcon.positionY = -100; 
        
//         //myUI.closeIcon.source = this._guiTexture;
        
//         // UI Text:
//         myUI.addText("DEXPark", 0, 80, Color4.Red(), 15);
//         myUI.canvas.hAlign = 'left'; myUI.canvas.vAlign = 'left';
//         // Name Portion
//         myUI.addText("Name: ", -120, 65, Color4.Yellow(), 12);
//         myUI.addText(theName, -100, 65, Color4.Black(), 10);
//         log(theName);
        
//         // Funds Portion
//         myUI.addText("$MANA: ", -120, 5, Color4.White(), 10);
//         myUI.addText("(Mana.)", -75, 5, Color4.White(), 10);
//         myUI.addText("$ETH: ", -120, 35, Color4.White(), 10);
//         myUI.addText("(Ether.)", -75, 35, Color4.White(), 10);

//         // User 0x Portion
//         myUI.addText("0x: ", -120, -25, Color4.Red(), 10);
//         myUI.addText(the0x, -100, -25, Color4.Red(), 10);

//         // Last Visit Portion
//         myUI.addText("Last Visit: ", -120, -35, Color4.White(), 7);
//         myUI.addText(this._lastVisit, -120, 5, Color4.White(), 7);
//         myUI.addText("Powered by \nDecentraphile", 110, -35, Color4.Gray(), 7);
//     }
// }