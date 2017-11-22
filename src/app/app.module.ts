import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
// 用于定义模块用的装饰器
@NgModule({
  // 导入模块依赖的组件、指令等；
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  // 用来导入当前模块所需的其他模块；
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // 导入相关的服务
  providers: [HeroService],
  // 标记出引导组件，在 Angular 启动应用时，将被标记的组件渲染到模板中。
  bootstrap: [AppComponent]
})
export class AppModule { }
