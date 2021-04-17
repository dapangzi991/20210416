$(function() {
	/* 获取验证码时计时器容器 */
	let timer = null
	/* 倒计时时长 */
	let time = 60
	
	/* 登录事件 */
	$('#loginBtn').click(() => {
		/* 获取输入值 */
		let mobile = $('#inputMobile').val()
		let code = $('#inputCode').val()
	})
	/* 获取验证码 */
	$('#getCode').click(() => {
		if(timer){
			alert(`请在${time}秒后重新发送`)
			return
		}
		timer = setInterval(() => {
			time--
			$('#getCode').html(`${time}秒后重新发送`)
			if(time < 2){
				$('#getCode').html('发送验证码')
				clearInterval(timer)
				timer = null
			}
		},1000)
	})
}())