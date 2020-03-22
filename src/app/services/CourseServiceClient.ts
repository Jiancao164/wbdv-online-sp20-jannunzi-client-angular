import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001358744/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001358744/courses/${courseId}`)
      .then(response => response.json())
}
