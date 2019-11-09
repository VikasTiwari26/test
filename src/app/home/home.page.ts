import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image:any='';

   imagePath :any;
  imgURL: any;
   message: string;
 
  constructor( public httpClient: HttpClient
    //private camera: Camera
    ) {}
  // openCam(){

  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    //alert(imageData)
  //    this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
  //   }, (err) => {
  //    // Handle error
  //    alert("error "+JSON.stringify(err))
  //   });

  // }



  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  callData(){
  //  var  subscriptionKey='45830fbefe144047907d87dc130da7a0';
   var  subscriptionKey='45830fbefe144047907d87dc130da7a0';
   
    var headers = new HttpHeaders();
  //  headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append("Ocp-Apim-Subscription-Key", subscriptionKey)
    //const requestOptions = new RequestOptions({ headers: headers });
  
    let postData = {
            "url": "https://www.asiaworld-expo.com/assets/img/710x413-AWE-bfe74aede2.png",
          
    }

    // this.httpClient.post("https://centralindia.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en",
    this.httpClient.post("https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/ocr?language=en&detectOrientation=true",
   postData,  {headers: new HttpHeaders({"Ocp-Apim-Subscription-Key": subscriptionKey,'Content-Type': 'application/json'})} )
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }
  
}
