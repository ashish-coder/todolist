import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InformationInterface} from '../models/information.interface';
//import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {HttpClient} from '@angular/common/http';
import {DateService} from '../date.service';
import {Time} from '@angular/common';


@Component({
  selector: 'date',
  styleUrls: ['./date.component.scss'],
  templateUrl: './date.component.html'

})


export class DateComponent implements OnInit {


  public dataofevent: InformationInterface;
  public printdate;
  selectvalueform: number;
  printdate1 = this.printdate;


  public typetotodowork: number = 0;
  public typeName: string = '';
  public mainnametodo: string = '';
  public abouttodaytodo: string = null;
  public timetodo: Time = null;
  public datetodo: Date = null;
  public idtodo: number = null;


  public isdisabeld: boolean = false;
  public isHidden: boolean = false;
  public isHiddenedit: boolean = true;

  @Input()
  information: InformationInterface;


  @Output()
  update: EventEmitter<InformationInterface> = new EventEmitter<InformationInterface>();


  public informationjson: InformationInterface[];


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private dateservice: DateService
  ) {
    this.route.queryParams.subscribe(params => {
      this.printdate = (params.index);
    });

  }

  ngOnInit() {
    this.dateservice.getData()
      .subscribe((informationjson) => {
        this.informationjson = informationjson;
      });

  }

  togetdata() {
    this.informationjson = null;
    this.dateservice.getData()
      .subscribe((informationjson) => {
        this.informationjson = informationjson;
      });
  }

  handelSubmit(event: InformationInterface) {

    event['yourdate'] = this.printdate;
    this.httpClient.post('http://localhost:3000/Information', event)
      .subscribe(()=>this.togetdata());
    console.log('qwerty');
    this.datetodo = null;
    this.abouttodaytodo = null;
    this.typeName = null;
    this.typetotodowork = null;
    this.timetodo = null;
    this.mainnametodo = null;
    this.selectvalueform = null;
    this.idtodo = null;
  }

  onRemove(event: InformationInterface) {
    this.dateservice
      .deletetodo(event)
      .subscribe((data: InformationInterface) => {
        this.informationjson = this.informationjson.filter((informationjson: InformationInterface) => {
          return informationjson.id !== event.id;
        });
      });
  }

  onupdate(event: InformationInterface) {
    this.dateservice
      .updatetodo(event)
      .subscribe((data: InformationInterface) => {

        this.informationjson = this.informationjson.filter((informationjson: InformationInterface) => {
          if (informationjson.id === event.id) {
            informationjson = Object.assign({}, informationjson, event);
          }
          this.togetdata()
          console.log('changes added');
          return informationjson;

        });
      });
  }


  onview(dateofevent) {

    this.datetodo = dateofevent.yourdate;
    this.abouttodaytodo = dateofevent.about;
    this.typeName = dateofevent.Eventname;
    this.typetotodowork = dateofevent.Typeoftodo;
    this.timetodo = dateofevent.time;
    this.mainnametodo = dateofevent.mainname;
    this.selectvalueform = dateofevent.Typeoftodo;
    this.idtodo = dateofevent.id;
    this.isdisabeld = true;
    this.isHidden = true;

  }

  onEdit() {
    this.isdisabeld = false;
    this.isHiddenedit = false;

  }

  selectChangeHandelerforform(event: any) {
    this.selectvalueform = (event.target.value);
    console.log(this.selectvalueform);
  }


  typeofeventdetails = [
    {

      name: 1,
      value: 'Birthday'
    },
    {

      name: 2,
      value: 'Anniversary'
    },
    {

      name: 3,
      value: 'Others'
    }
  ];

}
