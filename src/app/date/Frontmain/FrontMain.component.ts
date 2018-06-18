import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';




@Component({
  selector: 'front-root',
  templateUrl: './FrontMain.component.html',
  styleUrls: ['./FrontMain.component.scss']
})
export class FrontMainComponent implements OnInit{
  //monthpicker : DatePicker[]
  a = new Date("Tue Jun 01 2018");
  //c = new Date(1527791400000)
  b = this.a.getTime()
  q:Number=this.a.getMonth()
  todoListArray: any[];
  //i:number

  /*result = function(){

 while (this.q==6) {

      this.b =this.b + 86400000;
      var c  = new Date(this.b)
      this.todoListArray = c
     // this.todoListArray.push(c)
     // console.log(this.todoListArray)


    }
   /* for (var x:any=1; x<30;x++) {
    console.log(this.todoListArray[x])
    //return this.todoListArray
      }

  };*/

  constructor(private router:Router){}

  days:any[];
  change:number
  yearno:number

  getDaysInMonth = function (month , year) {
    this.days=[];
    var date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      this.days.push(new Date(date).toDateString());
      date.setDate(date.getDate() + 1);
    }
    // console.log(this.days + '/n')
    return this.days;
  }



  ngOnInit(){
    //console.log(this.b)
    //var i=0;
    //this.result()


    //console.log(this.days + '/n')


  }

  // i:number = this.days[1]
  todolistofdate(index){

    const navigationextras:NavigationExtras= {
      queryParams:{index}
    }

      this.router.navigate(["date"],navigationextras);


    //console.log(this.days[index])
  }


  selectChangeHandeler(event:any){
    this.change=(event.target.value)
    console.log(event.target.value)
    this.getDaysInMonth(this.change-1,this.yearno)


  }

  selectChangeHandelerforyear(event:any)

  {
    this.yearno=(event.target.value)
    this.getDaysInMonth(this.change-1,this.yearno)
  }




  monthpicker = [
    {

      name:1,
      value: 'Jan'
    },
    {

      name:2,
      value: 'Feb'
    },
    {

      name:3,
      value: 'Mar'
    },
    {

      name:4,
      value: 'Apr'
    },
    {

      name:5,
      value: 'May'
    },
    {

      name:6,
      value: 'Jun'
    },
    {

      name:7,
      value: 'Jul'
    },
    {

      name:8,
      value: 'Aug'
    },
    {

      name:9,
      value: 'Sep'
    },
    {

      name:10,
      value: 'Oct'
    },
    {

      name:11,
      value: 'Nov'
    },
    {

      name:12,
      value: 'Dec'
    }



  ]

  yeararray=[
    {year:2000},
    {year:2001},
    {year:2002},
    {year:2003},
    {year:2004},
    {year:2005},
    {year:2006},
    {year:2007},
    {year:2008},
    {year:2009},
    {year:2010},
    {year:2011},
    {year:2012},
    {year:2013},
    {year:2014},
    {year:2015},
    {year:2016},
    {year:2017},
    {year:2018},

  ]


}
















/*

 */
