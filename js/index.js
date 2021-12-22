$(function () {
    $("#signup").click(function () {
        if ($("#formDiv").css("display") == "block" && $("#formDivLogin").css("display") == "none") {
            $("#formDiv").slideUp("slow")
        }
        else if ($("#formDivLogin").css("display") == "block" && $("#formDiv").css("display") == "none") {
            $("#formDivLogin").slideUp("slow")
        }
        else {
            $("#formDiv").slideDown("slow")
        }


    })

    $("#login").click(function () {
        $("#formDiv").slideUp("slow")
        $("#formDivLogin").slideDown("slow")
    })

    $("#register").click(function () {
        $("#formDivLogin").slideUp("slow")
        $("#formDiv").slideDown("slow")
    })
})