import {observable} from 'mobx';

class MemberStore {
  @observable memberSeq = 0;
  @observable memberId = '';
  @observable memberLevel = 0;

  loginAction(loginParams = {}) {
    this.memberSeq = loginParams.memberSeq ?? 0;
    this.memberId = loginParams.memberId ?? '';
    this.memberLevel = loginParams.memberLevel ?? 0;
  }

  getLoginInfo(){
      return {
        memberSeq : this.memberSeq,
        memberId : this.memberId,
        memberLevel : this.memberLevel,
      }
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
export default new MemberStore();
