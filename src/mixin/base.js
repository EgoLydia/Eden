export default{
    data(){
        return {
            isBusy: false,
            busyMessage: "",
            hasError: false,
            errors: [],
            hasMessage: false,
            message: "",
    };
    },
methods: {
    beginLoading(message){
        this.isBusy =true;
        this.hasError = false;
        this.errors =[];
        this.busyMessage = message;
    },
    setError(errors){
        this.hasError = true;
        this.errors = errors;
    },
    finishLoading(){

        this.isBusy =false;
        this.busyMessage ="";
    },
    resetError(){
        this.hasError = false;
        this.errors = [];
        },
        setMessage(message){
            this.hasMessage = true;
            this.message =message;
        },
        resetMessage(){
            this.hasMessage = false;
            this.message =  "";
        }

}
}