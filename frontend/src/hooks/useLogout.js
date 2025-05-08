import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout } from '../lib/api'

const useLogout = () => {
    const queryClinet = useQueryClient()
    const {mutate: logoutMutation, isPending, error} = useMutation({
      mutationFn: logout,
      onSuccess: () => queryClinet.invalidateQueries({queryClinet: ["authUser"]})
    })

    return {logoutMutation, isPending, error}
}

export default useLogout