// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import emailjs from 'emailjs-com';
// @Component({
//   selector: 'app-contact-popup',
//   templateUrl: './contact-popup.component.html',
//   styleUrls: ['./contact-popup.component.css']
// })
// export class ContactPopupComponent {
//   // myForm: FormGroup = this.fb.group({
//   // toName: '',
//   // fromEmail:'',
//   // phoneno:'',
//   // message:''
//   // });
//   emailjs:any;
//   myForm: FormGroup | any ;

  

//   constructor(private toastr: ToastrService,private fb:FormBuilder) {
//      this.initializeForm()
//   }

//   initializeForm(): void {
//     this.myForm = this.fb.group({
//       toName:  new FormControl( ['',
//       //  Validators.required
//       ]), // Example field with required validation
//       // fromName: ['', Validators.required],
//       fromEmail: new FormControl( ['',
//       //  Validators.required
//       ]),
      
     
//       message: new FormControl( ['',
//       //  Validators.required
//       ]),
//       phoneno:new FormControl( ['',
//       //  Validators.required
//       ])
//   })
//   }
  
//   ngOnInit(): void {
//     this.initializeForm()
//     // this.onSubmit()
//     // this.sendEmail()
//   }
 
// //  this.formGroup



//   onSubmit() {
//     const templateParams = {
//       to_name: this.myForm.value.toName,
//       from_email: this.myForm.value.fromEmail,
//       phoneno: this.myForm.value.phoneno,
//       message: this.myForm.value.message
//   };
//     if (this.myForm.valid) {
//       const templateParams = this.myForm.value;
//       console.log(this.myForm.value)
//       // Call your email sending service passing formData
//       // For example: this.emailService.sendEmail(formData.toName, formData.fromName, ...)
    
    
//     }
//     emailjs.send('service_0q7yc3a','template_qm22pv4', templateParams, 'UXMQMKDA99YgnOre5')
//     .then((response: { status: any; text: any; }) => {
//       this.toastr.success('SUCCESS!');
//        console.log('SUCCESS!', response.status, response.text);
//        this.myForm.reset();
//     }, (err: any) => {
//        console.log('FAILED...', err);
//     });
  
//   }
// }


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-popup',
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.css']
})
export class ContactPopupComponent implements OnInit  {
  emailjs: any;
  // myForm: FormGroup | any;



  constructor(private toastr: ToastrService, private fb: FormBuilder) {
    
  }


myForm = new FormGroup ({
  toName :new FormControl(''),
  fromName: new FormControl('',[Validators.required]),
  fromEmail: new FormControl('', [Validators.required, Validators.email]),
  phoneno: new FormControl('', [Validators.required]),
  message: new FormControl('', [Validators.required])
})

get toName() {
  return this.myForm.get('toName');
}
get fromName() {
  return this.myForm.get('fromName');
}

get fromEmail() {
  return this.myForm.get('fromEmail');
}

get phoneno() {
  return this.myForm.get('phoneno');
}

get message() {
  return this.myForm.get('message');
}

  ngOnInit(): void {
 
  }

  onSubmit() {
    if (this.myForm.valid) {
      const templateParams = {
        to_name:this.myForm.value.toName,
        from_name: this.myForm.value.fromName,
        from_email: this.myForm.value.fromEmail,
        phoneno: this.myForm.value.phoneno,
        message: this.myForm.value.message
      };

      emailjs.send('service_0q7yc3a', 'template_qm22pv4', templateParams, 'UXMQMKDA99YgnOre5')
        .then((response: { status: any; text: any; }) => {
          this.toastr.success('SUCCESS!');
          console.log('SUCCESS!', response.status, response.text);
          this.myForm.reset();
        }, (err: any) => {
          console.log('FAILED...', err);
        });
    } else {
      this.toastr.error('Please fill all required fields.');
    }
  }


}
