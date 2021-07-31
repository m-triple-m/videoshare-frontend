import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { app_config } from '../config';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {
    videoData:any;
    url=app_config.api_url;
  constructor(private actroute:ActivatedRoute , private videoservice:VideoService) {

   }

  ngOnInit(): void {
    let id=this.actroute.snapshot.paramMap.get('videoId');
   this.videoservice.getVideoById(id).subscribe(( data )=>{
     console.log(data);
     this.videoData=data;
   })
  }
  
}
