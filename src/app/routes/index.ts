import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';
import { CourseRoutes } from '../modules/course/course.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrollrdCourseMark/studentEnrollrdCourseMark.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    routes: UserRoutes.router
  },
  {
    path: '/student',
    routes: StudentRoutes.router
  },
  {
    path: '/faculty',
    routes: FacultyRoutes.router
  },
  {
    path: '/admin',
    routes: AdminRoutes.router
  },
  {
    path: '/auth',
    routes: AuthRoutes.router
  },
  {
    path: '/management-department',
    routes: ManagementDepartmentRoutes.router
  },
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes.router
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes.router
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes.router
  },
  {
    path: '/building',
    routes: BuildingRoutes.router
  },
  {
    path: '/room',
    routes: RoomRoutes.router
  },
  {
    path: '/course',
    routes: CourseRoutes.router
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes.router
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoutes.router
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes.router
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassScheduleRoutes.router
  },
  {
    path: '/student-enrolled-course',
    routes: StudentEnrolledCourseRoutes.router
  },
  {
    path: '/student-mark',
    routes: StudentEnrolledCourseMarkRoutes.router
  },
  {
    path: '/student-semester-payment',
    routes: StudentSemesterPaymentRoutes.router
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
