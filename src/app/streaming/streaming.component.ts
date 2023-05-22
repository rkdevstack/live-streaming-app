import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;

  ngOnInit() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoPlayer.nativeElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing the camera:', error);
      });
  }
}