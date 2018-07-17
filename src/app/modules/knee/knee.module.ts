import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KneeComponent } from '../../components/bodyparts/knee/knee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MedicalHistoryComponent } from '../../components/bodypart-sections/knee/medical-history/medical-history.component';
import { DiagnosticTestsComponent } from '../../components/bodypart-sections/knee/diagnostic-tests/diagnostic-tests.component';
import { AdditionalFactorsComponent } from '../../components/bodypart-sections/knee/additional-factors/additional-factors.component';
import { AdditionalQuestionsComponent } from '../../components/bodypart-sections/knee/additional-questions/additional-questions.component';
import { AnkylosisComponent } from '../../components/bodypart-sections/knee/ankylosis/ankylosis.component';
import { AssitiveDirectiveComponent } from '../../components/bodypart-sections/knee/assitive-directive/assitive-directive.component';
import { FlareUpsComponent } from '../../components/bodypart-sections/knee/flare-ups/flare-ups.component';
import { FunctionalImpactComponent } from '../../components/bodypart-sections/knee/functional-impact/functional-impact.component';
import { InitialRangeComponent } from '../../components/bodypart-sections/knee/initial-range/initial-range.component';
import { JointStabilityComponent } from '../../components/bodypart-sections/knee/joint-stability/joint-stability.component';
import { OtherPertinentPeComponent } from '../../components/bodypart-sections/knee/other-pertinent-pe/other-pertinent-pe.component';
import { OtherPhysicalExamComponent } from '../../components/bodypart-sections/knee/other-physical-exam/other-physical-exam.component';
import { RationaleComponent } from '../../components/bodypart-sections/knee/rationale/rationale.component';
import { RemainingEffectiveFunctionComponent } from '../../components/bodypart-sections/knee/remaining-effective-function/remaining-effective-function.component';
import { RemarksComponent } from '../../components/bodypart-sections/knee/remarks/remarks.component';
import { RepeatedUseComponent } from '../../components/bodypart-sections/knee/repeated-use/repeated-use.component';
import { SurgicalProcedureComponent } from '../../components/bodypart-sections/knee/surgical-procedure/surgical-procedure.component';
import { ContentsModule } from 'angular-contents';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { VeteranInfoComponent } from '../../components/veteran-info/veteran-info.component';
import { VeteranHistoryComponent } from '../../components/bodypart-sections/knee/veteran-history/veteran-history.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, ContentsModule,
    NgxPageScrollModule,
    ModalModule.forRoot()
  ],
  declarations: [
    KneeComponent,
    VeteranInfoComponent,
    MedicalHistoryComponent,
    DiagnosticTestsComponent,
    AdditionalFactorsComponent,
    AdditionalQuestionsComponent,
    AnkylosisComponent,
    AssitiveDirectiveComponent,
    DiagnosticTestsComponent,
    FlareUpsComponent,
    FunctionalImpactComponent,
    InitialRangeComponent,
    JointStabilityComponent,
    MedicalHistoryComponent,
    OtherPertinentPeComponent,
    OtherPhysicalExamComponent,
    RationaleComponent,
    RemainingEffectiveFunctionComponent,
    RemarksComponent,
    RepeatedUseComponent,
    SurgicalProcedureComponent,
    VeteranHistoryComponent
  ]
})
export class KneeModule { }
