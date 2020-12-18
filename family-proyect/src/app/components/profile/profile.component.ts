import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/service/profile.service'
declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  constructor(private serviceProfile: ProfileService ) { }

  ngOnInit(): void {
    this.getProfileData()
  }

  



  data_profile:any;
  getProfileData(){
      this.serviceProfile.get_profile_data().subscribe((data)=>{
        console.log(data)
        this.data_profile=data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  // $(".toggle-password").click(function() {

  //   $(this).toggleClass("fa-eye fa-eye-slash");
  //   var input = $($(this).attr("toggle"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //   } else {
  //     input.attr("type", "password");
  //   }
  // });

}
