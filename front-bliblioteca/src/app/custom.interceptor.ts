import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("meuToken");

  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,

    }
  })
  //console.log("Clone Request JSON:", JSON.stringify(cloneReq, null, 2));
  return next(cloneReq);
};
