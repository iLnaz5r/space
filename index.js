const burger = document.querySelector('.burger');
const nav = document.querySelector('.desktop-nav');

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
});



// let mainBody = document.querySelector('body');
// document.querySelector('.home-btn').addEventListener('click', function() {
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = `
//     <div class="body" style="background-image: url(background-destination-desktop.jpg);color: white;background-size: cover; background-repeat: no-repeat;">
//         <header style="display: flex; align-items: center; padding: 10px;">
//             <img src="logo.svg" width="40px">
//             <hr style="width: 370px; height: 0;opacity: 60%;margin-left: 40px;">
//             <div class="nums" style="text-transform: uppercase;display: flex; gap: 50px; background-color: rgb(37, 59, 77); padding-inline: 100px; height: 60px; opacity: 60%;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
//                 <div class="num1" style="display: flex; align-items: center; gap: 8px;font-size: 12px;">
//                 <h4 style="font-weight: bolder; font-size: 15px;">00</h4>
//                 <p>Home</p>
//                 </div>
//                 <div class="num1" style="display: flex; align-items: center;gap: 8px; font-size: 12px;">
//                     <h4 style="font-weight: bolder; font-size: 15px;">01</h4>
//                     <p>Destination</p>
//                 </div>
//                 <div class="num1" style="display: flex; align-items: center;gap: 8px; font-size: 12px;">
//                     <h4 style="font-weight: bolder; font-size: 15px;">02</h4>
//                     <p>Crew</p>
//                 </div>
//                 <div class="num1" style="display: flex; align-items: center;gap: 8px; font-size: 12px;">
//                     <h4 style="font-weight: bolder; font-size: 15px;">03</h4>
//                     <p>Technology</p>
//                 </div>

//             </div>
//         </header>
//         <div class="main" style="display: flex;align-items: center; justify-content: space-between;margin-top:-100px;padding:30px">
//             <div class="left-dest" style="display: flex; flex-direction: column;align-items: start; gap: 60px; text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-top:100px">
//                 <h2><span class="gray" style="color: gray;font-weight: bolder;">01</span>  pick your destination</h2>
//                 <img src="image-mars.png" width="350px">
//             </div>
//             <div class="right-dest" style="display: flex; flex-direction: column; width: 400px; margin-top: 200px; gap: 20px;">
//                 <div class="right-top" style="display: flex;width: 280px;text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: 100; color: rgb(160, 162, 176);">
//                     <p class="moon">Moon</p>
//                     <p class="mars">Mars</p>
//                     <p class="europe">Europa</p>
//                     <p class="titan">Titan</p>

//                 </div>
//                 <div class="right-main" style="display: flex; flex-direction: column;gap: 20px;">
//                     <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 100;">Mars</h1>
//                     <p style="color: rgb(160, 162, 176); font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 100;">Don't forget to pack your hiking boots.You'll need them to trackle Olympus Mons,the tallest planetary mountain in our solar system.It's two and a half times the size of Everest! </p>
//                     <hr style="opacity: 30%;">
//                     <div class="distance" style="display: flex;">
//                         <div class="dist-1">
//                             <p style="color: rgb(160, 162, 176); font-size: 10px;">Avg.Distance</p>
//                             <h2>225 Mil.km</h2>
//                         </div>
//                         <div class="dist-1">
//                             <p style="color: rgb(160, 162, 176); font-size: 10px;">Est. travel line</p>
//                             <h2>9 months</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>`
//     mainBody.appendChild(newDiv)
// });
// let main2Body = document.querySelector('body');
// document.querySelector('.home-btn').addEventListener('click', function() {
//     let secondDiv = document.createElement('div')
//     secondDiv.innerHTML = `
//     <div class="main-2" style="display: flex;align-items: center; justify-content: space-between;margin-top:-100px;padding:30px">
//         <div class="left-dest" style="display: flex; flex-direction: column;align-items: start; gap: 60px; text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-top:100px">
//             <h2><span class="gray" style="color: gray;font-weight: bolder;">01</span>  pick your destination</h2>
//             <img src="image-moon.png" width="350px">
//         </div>
//         <div class="right-dest" style="display: flex; flex-direction: column; width: 400px; margin-top: 200px; gap: 20px;">
//             <div class="right-top" style="display: flex;width: 280px;text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: 100; color: rgb(160, 162, 176);gap:20px">
//                 <p class="moon">Moon</p>
//                 <p class="mars">Mars</p>
//                 <p class="europe">Europa</p>
//                 <p class="titan">Titan</p>

//             </div>
//             <div class="right-main" style="display: flex; flex-direction: column;gap: 20px;">
//                 <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 100;">Moon</h1>
//                 <p style="color: rgb(160, 162, 176); font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 100;">Don't forget to pack your hiking boots.You'll need them to trackle Olympus Mons,the tallest planetary mountain in our solar system.It's two and a half times the size of Everest! </p>
//                 <hr style="opacity: 30%;">
//                 <div class="distance" style="display: flex;">
//                     <div class="dist-1">
//                         <p style="color: rgb(160, 162, 176); font-size: 10px;">Avg.Distance</p>
//                         <h2>225 Mil.km</h2>
//                     </div>
//                     <div class="dist-1">
//                         <p style="color: rgb(160, 162, 176); font-size: 10px;">Est. travel line</p>
//                         <h2>9 months</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div> `
//     main2Body.appendChild(newDiv)
// });

// let newThirdDiv = document.createElement('div')
// newSecondDiv.innerHTML = `<div class="main-2" style="display: flex;align-items: center; justify-content: space-between;margin-top:-100px;padding:30px">
//     <div class="left-dest" style="display: flex; flex-direction: column;align-items: start; gap: 60px; text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-top:100px">
//         <h2><span class="gray" style="color: gray;font-weight: bolder;">01</span>  pick your destination</h2>
//         <img src="image-europa.png" width="350px">
//     </div>
//     <div class="right-dest" style="display: flex; flex-direction: column; width: 400px; margin-top: 200px; gap: 20px;">
//         <div class="right-top" style="display: flex;width: 280px;text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: 100; color: rgb(160, 162, 176);gap:20px">
//             <p class="moon">Moon</p>
//             <p class="mars">Mars</p>
//             <p class="europe">Europa</p>
//             <p class="titan">Titan</p>

//         </div>
//         <div class="right-main" style="display: flex; flex-direction: column;gap: 20px;">
//             <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 100;">Europe</h1>
//             <p style="color: rgb(160, 162, 176); font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 100;">Don't forget to pack your hiking boots.You'll need them to trackle Olympus Mons,the tallest planetary mountain in our solar system.It's two and a half times the size of Everest! </p>
//             <hr style="opacity: 30%;">
//             <div class="distance" style="display: flex;">
//                 <div class="dist-1">
//                     <p style="color: rgb(160, 162, 176); font-size: 10px;">Avg.Distance</p>
//                     <h2>225 Mil.km</h2>
//                 </div>
//                 <div class="dist-1">
//                     <p style="color: rgb(160, 162, 176); font-size: 10px;">Est. travel line</p>
//                     <h2>9 months</h2>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div> `
// mainBody.appendChild(newThirdDiv)

// // let newFourthdDiv = document.createElement('div')
// // newSecondDiv.innerHTML = `<div class="main-2" style="display: flex;align-items: center; justify-content: space-between;margin-top:-100px;padding:30px">
// //     <div class="left-dest" style="display: flex; flex-direction: column;align-items: start; gap: 60px; text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-top:100px">
// //         <h2><span class="gray" style="color: gray;font-weight: bolder;">01</span>  pick your destination</h2>
// //         <img src="image-titan.png" width="350px">
// //     </div>
// //     <div class="right-dest" style="display: flex; flex-direction: column; width: 400px; margin-top: 200px; gap: 20px;">
// //         <div class="right-top" style="display: flex;width: 280px;text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-weight: 100; color: rgb(160, 162, 176);gap:20px">
// //             <p class="moon">Moon</p>
// //             <p class="mars">Mars</p>
// //             <p class="europe">Europa</p>
// //             <p class="titan">Titan</p>

// //         </div>
// //         <div class="right-main" style="display: flex; flex-direction: column;gap: 20px;">
// //             <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 100;">Titan</h1>
// //             <p style="color: rgb(160, 162, 176); font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 100;">Don't forget to pack your hiking boots.You'll need them to trackle Olympus Mons,the tallest planetary mountain in our solar system.It's two and a half times the size of Everest! </p>
// //             <hr style="opacity: 30%;">
// //             <div class="distance" style="display: flex;">
// //                 <div class="dist-1">
// //                     <p style="color: rgb(160, 162, 176); font-size: 10px;">Avg.Distance</p>
// //                     <h2>225 Mil.km</h2>
// //                 </div>
// //                 <div class="dist-1">
// //                     <p style="color: rgb(160, 162, 176); font-size: 10px;">Est. travel line</p>
// //                     <h2>9 months</h2>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // </div> `
// // mainBody.appendChild(newFourthdDiv)