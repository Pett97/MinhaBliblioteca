import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("meuToken");

  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,

    }
  })

  return next(cloneReq);
};
