<template>
  <form novalidate ref="contact-form">
    <div class="form-group">
      <label for="msg-title">留言标题</label>
      <input type="text" class="form-control" id="msg-title" required>
      <div class="invalid-feedback">请输入留言标题</div>
    </div>
    <div class="form-group">
      <label for="msg-content">留言内容</label>
      <textarea class="form-control" id="msg-content" rows="3" required></textarea>
      <div class="invalid-feedback">请输入留言内容</div>
    </div>
    <div class="form-group">
      <label for="msg-email">联系邮箱</label>
      <input type="email" class="form-control" id="msg-email" required>
      <div class="invalid-feedback">请输入联系邮箱</div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary btn-sm mr-2">提交</button>
      <button type="reset" class="btn btn-secondary btn-sm">取消</button>
    </div>
  </form>
</template>

<script>
  export default {
    mounted(){
      this.form = this.$refs["contact-form"];
      this.form.addEventListener("submit", this.handleFormSubmitClick, false);
      this.form.addEventListener("reset", this.handleFormResetClick, false);
    },
    methods: {
      handleFormSubmitClick(event){
        if(this.form.checkValidity() == false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.form.classList.add("was-validated");
      },
      handleFormResetClick(){
        this.form.classList.remove("was-validated");
      }
    }
  }
</script>

<style scoped lang="stylus">
</style>
