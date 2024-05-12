import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxsModule, Store } from "@ngxs/store";

import { PostService } from "../../core/services/post.service";
import { Post, PostState } from "../../core/state/post";
import { PostsComponent } from "./posts.component";

describe("PostsComponent", () => {
  let dispatchSpy: jasmine.Spy;
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientModule, NgxsModule.forRoot([PostState])],
      providers: [PostService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    dispatchSpy = spyOn(store, "dispatch").and.callThrough();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should dispatch GetPosts action on initialization", () => {
    expect(dispatchSpy).toHaveBeenCalledWith([new Post.GetPosts()]);
  });
});
