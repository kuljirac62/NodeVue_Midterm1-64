import Api from '@/services/Api'

export default {
    index() {
        return Api().get('users')
    },
    show(userId){
        return Api().get('TaxiDriverr/'+userId)
    },
    post(TaxiDriver){
        return Api().post('TaxiDriver', TaxiDriver)
    },
    put(TaxiDriver){
        return Api().put('TaxiDriver/'+user.id, TaxiDriver)
    },
    delete(TaxiDriver){
        return Api().delete('TaxiDriver/'+user.id, TaxiDriver)
    },
}