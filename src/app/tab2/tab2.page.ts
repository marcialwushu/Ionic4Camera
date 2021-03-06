import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../../app/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;
  photos: any;

  constructor(private camera: Camera, public photoService: PhotoService){

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
          data: 'data:image/jpeg;base64,' + imageData
      }); }, (err) => {
      // Handle error
      console.log("Camera issue: " + err);
      console.log(ImageData);
  });
  }

  ngOnInit() {
    this.photoService.loadSave();
  }
}
