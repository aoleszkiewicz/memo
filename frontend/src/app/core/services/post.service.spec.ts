import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { environment } from "../../../environments/environment";
import { PostService } from "./post.service";

describe("PostService", () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should retrieve posts with pagination and sorting", () => {
    const mockPosts = {
      data: [
        {
          id: 1,
          attributes: {
            slug: "test-post",
            title: "Test Post",
            date: "2024-05-21",
            // other attributes and relationships
          },
        },
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 5,
          pageCount: 1,
          total: 1,
        },
      },
    };

    service.getPosts(1, 5).subscribe((posts) => {
      expect(posts.data.length).toBe(1);
      expect(posts.data[0].attributes.slug).toEqual("test-post");
    });

    const req = httpTestingController.expectOne({
      method: "GET",
      url: `${environment.apiUrl}/posts`,
    });

    req.flush(mockPosts);
  });
});
