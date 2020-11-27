import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import postscribe from 'postscribe';

declare var $:any;

@Component({
 
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent implements OnInit  {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  
  value:Number=35;
  val_agua = 20;
  val_general = 0;

  modal_paid:any;
  onPercentChange(val: number) {
    console.log('here');  
    this.val_agua = 0;
    this.val_agua = val;
    this.val_general = 0;
    console.log(val);
    $('#response').empty();
    $('#modalPaid').remove();
    this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
      $('.payment-checkout-modal').remove();
    }
  }
  onGeneralChange(val: number) {
    console.log('here2');  
    this.val_general = val;
    console.log(val);
    $('#response').empty();
    $('#modalPaid').remove();
    this.modal_paid= null;
    console.log($('.payment-checkout-modal'));
    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
      $('.payment-checkout-modal').remove();
    }
  }
  ngOnInit(): void {
    // var myCard = $('#my-card');
    // console.log(myCard);
    // postscribe('#response', `
    // <script> 
    // console.log('postscribe')
    // let paymentCheckout = new PaymentCheckout.modal({
    // client_app_code: 'ADCOM-EC-CLIENT', // Client Credentials Provied by Paymentez
    // client_app_key: 'XbcDMWfFaxJcinscgku63MWfe22WpU', // Client Credentials Provied by Paymentez
    // locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    // env_mode: 'stg', 
    // onOpen: function () {
    //   console.log('modal open');
    // },
    // onClose: function () {
    //   console.log('modal closed');
    // },
    // onResponse: function (response) { // The callback to invoke when the Checkout process is completed

    //   /*
    //     In Case of an error, this will be the response.
    //     response = {
    //       "error": {
    //         "type": "Server Error",
    //         "help": "Try Again Later",
    //         "description": "Sorry, there was a problem loading Checkout."
    //       }
    //     }

    //     When the User completes all the Flow in the Checkout, this will be the response.
    //     response = {
    //       "transaction":{
    //           "status": "success", // success or failure
    //           "id": "CB-81011", // transaction_id
    //           "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
    //       }
    //     }
    //   */
    //   console.log('modal response');
    //   document.getElementById('response').innerHTML = JSON.stringify(response);
    // }
    // });
    // let btnOpenCheckout = document.querySelector('.js-payment-checkout');
    // btnOpenCheckout.addEventListener('click', function () {
    //   paymentCheckout.open({
    //     user_id: '1234',
    //     user_email: 'jhon@doe.com', //optional
    //     user_phone: '7777777777', //optional
    //     order_description: '1 Green Salad',
    //     order_amount: 35,
    //     order_vat: 0,
    //     order_reference: '#234323411',
    //     //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
    //     //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
    //     //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
    //   });
    // });
  
    // window.addEventListener('popstate', function () {
    //   paymentCheckout.close();
    // });

    // </script>`)
  }
  
  openPaymentez(){
    console.log("paid")

    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
      $('.payment-checkout-modal').remove();
    }
    postscribe('#response', `
    <script> 
    console.log('postscribe')
    $('#response').empty();
    var paymentCheckout =""
    var paymentCheckout = new PaymentCheckout.modal({
    client_app_code: 'ADCOM-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'XbcDMWfFaxJcinscgku63MWfe22WpU', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
    },
    onClose: function () {
      console.log('modal closed');
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed

      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckout =""
    var btnOpenCheckout = document.querySelector('.js-payment-checkout');
    btnOpenCheckout.addEventListener('click', function () {
      paymentCheckout.open({
        user_id: '1234',
        user_email: 'jhon@doe.com', //optional
        user_phone: '7777777777', //optional
        order_description: '1 Green Salad',
        order_amount: 45,
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    });
  
    window.addEventListener('popstate', function () {
      paymentCheckout.close();
    });

    </script>`)
  }


  donateHamburger(){
    console.log("paid")
    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
      $('.payment-checkout-modal').remove();
    }
    $('#response').innerHTML=""
    


    console.log(this.val_agua);
    this.modal_paid =  postscribe('#response', `
    <script id='modalPaid'> 
    $('#response').empty();

    console.log('postscribe')
    var paymentCheckout2 =null;
    var paymentCheckout2 = new PaymentCheckout.modal({
    client_app_code: 'TPP3-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'ZfapAKOk4QFXheRNvndVib9XU3szzg', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
    },
    onClose: function () {
      console.log('modal closed');
    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed

      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckout2 =""
    var btnOpenCheckout2 = document.querySelector('.js-payment-checkout2');
    btnOpenCheckout2.addEventListener('click', function () {
      paymentCheckout2.open({
        user_id: '1234',
        user_email: 'jhon@doe.com', //optional
        user_phone: '7777777777', //optional
        order_description: '1 Green Salad',
        order_amount:${this.val_agua},
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    });
  
    window.addEventListener('popstate', function () {
      paymentCheckout2.close();
      

    });

    </script>`)
    
    console.log(this.modal_paid);
    
    
    
    
    
    
    
    
  }

  
  donateGeneral(){
    console.log("paid")
    var donate =this.val_general;
    console.log(donate)
    if($('.payment-checkout-modal')!=null){
      $('.payment-checkout-modal').empty();
      $('.payment-checkout-modal').remove();
    }
    $('#response').innerHTML=""
    $('#response').innerHTML=""
    postscribe('#response', `
    <script> 
    console.log('postscribe')
    var paymentCheckoutG =""
    var paymentCheckoutG = new PaymentCheckout.modal({
    client_app_code: 'ADCOM-EC-CLIENT', // Client Credentials Provied by Paymentez
    client_app_key: 'XbcDMWfFaxJcinscgku63MWfe22WpU', // Client Credentials Provied by Paymentez
    locale: 'es', // User's preferred language (es, en, pt). English will be used by default.
    env_mode: 'stg', 
    onOpen: function () {
      console.log('modal open');
      console.log('${donate}');

     
    },
    onClose: function () {
      console.log('modal closed');
      console.log('${donate}');
      this.val_general=0;

    },
    onResponse: function (response) { // The callback to invoke when the Checkout process is completed

      /*
        In Case of an error, this will be the response.
        response = {
          "error": {
            "type": "Server Error",
            "help": "Try Again Later",
            "description": "Sorry, there was a problem loading Checkout."
          }
        }

        When the User completes all the Flow in the Checkout, this will be the response.
        response = {
          "transaction":{
              "status": "success", // success or failure
              "id": "CB-81011", // transaction_id
              "status_detail": 3 // for the status detail please refer to: https://paymentez.github.io/api-doc/#status-details
          }
        }
      */
      console.log('modal response');
      document.getElementById('response').innerHTML = JSON.stringify(response);
    }
    });
    var btnOpenCheckoutG =""
    var btnOpenCheckoutG = document.querySelector('.js-payment-checkoutG');
    $('.js-payment-checkoutG').empty();

    btnOpenCheckoutG.addEventListener('click', function (donate) {
      console.log('dentro del modal')
      console.log(${donate});
      paymentCheckoutG.open({
        user_id: '1234',
        user_email: 'jhon@doe.com', //optional
        user_phone: '7777777777', //optional
        order_description: '1 Green Salad',
        order_amount:${donate},
        order_vat: 0,
        order_reference: '#234323411',
        //order_installments_type: 2, // optional: The installments type are only available for Equador. The valid values are: https://paymentez.github.io/api-doc/#installments-type
        //order_taxable_amount: 0, // optional: Only available for Datafast (Equador). The taxable amount, if it is zero, it is calculated on the total. Format: Decimal with two fraction digits.
        //order_tax_percentage: 10 // optional: Only available for Datafast (Equador). The tax percentage to be applied to this order.
      });
    });
  
    window.addEventListener('popstate', function () {
      paymentCheckoutG.close();
      paymentCheckoutG.remove();
      paymentCheckoutG.empty();
      this.val_general=0;
    });

    </script>`)
  }

  ngAfterViewInit() {
    
  }


  open(content) {
    var myCard = $('#my-card');
    console.log("xxx");
    this.modalService.open(content,{ size: 'lg' });
  }
  

}
