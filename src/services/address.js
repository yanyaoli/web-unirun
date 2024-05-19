// 请求地址配置文件
const baseURL = 'https://run-lb.tanmasports.com/v1';

export default {
    baseURL,
    login: `${baseURL}/auth/login/password`,
    user: `${baseURL}/auth/query/token`,
    activity: `${baseURL}/clubactivity/getJoinNum`,
    runStandard: `${baseURL}/unirun/query/runStandard`,
    newActivity: `${baseURL}/unirun/save/run/record/new`,
    club: `${baseURL}/clubactivity/querySemesterClubActivity`,
    myClub: `${baseURL}/clubactivity/queryMyActivityList`,
    myTask: `${baseURL}/clubactivity/queryMySemesterClubActivity`,
    joinClub: `${baseURL}/clubactivity/joinOrCancelSchoolSemesterActivity`,
};
