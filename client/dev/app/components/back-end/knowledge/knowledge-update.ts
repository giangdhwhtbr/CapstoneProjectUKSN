import { Component, OnInit, Inject } from '@angular/core';
import { Knowledge } from '../../../interface/knowledge';


import { KnowledgeService } from '../../../services/knowledge';


import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

@Component({
  selector: 'knowledge-update',
  templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-update.html',
  styleUrls: ['client/dev/app/components/back-end/knowledge/styles/knowledge.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [KnowledgeService]
})

export class UpdateKnowledgeComponent {
  updateKnowledgeForm: ControlGroup;

  id: string;

  knowledge: Knowledge;
  _id: string;
  name: string;
  description: string;

  ngOnInit():void {
    this._knowledgeService.findKnowledgeById(this.id).subscribe(
      (knowledge) => {
        this.knowledge = knowledge;
        this.name = knowledge.name;
        this.description = knowledge.description;
        this._id = knowledge._id;

    },
      (error) => {
        console.log(error.text());
      }
    );
  }

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(KnowledgeService) private _knowledgeService: KnowledgeService,
            public router: Router, rParam: RouteSegment) {
    this.id = rParam.getParam('id');

    this.updateKnowledgeForm = fb.group({
      "name": [""],
      "description": [""],
      "_id":[""],
    });
  }

  updateKnowledge(knowledge) {
    this._knowledgeService.updateKnowledge(knowledge).subscribe((knowledge)=> {
      console.log('update successed');
    },
    (error) => {
      console.log(error.text());
    }
    );
    window.location.href = 'admin/knowledges';
  }

}