import {Request, Response} from "express"
import authService from "../service/auth.service"

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body)

      res
        .cookie("refreshToken", result.refreshToken, {
          httpOnly: true,
          secure: false, // Set to true in production
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(201)
        .json({
          success: true,
          user: result.user,
          accessToken: result.accessToken
        })
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      })
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await authService.login(req.body)

      res
        .cookie("refreshToken", result.refreshToken, {
          httpOnly: true,
          secure: false, // Set to true in production
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          success: true,
          user: result.user,
          accessToken: result.accessToken
        })
    } catch (error: any) {
      res.status(401).json({
        message: error.message,
      })
    }
  }

  async refresh(req: Request, res: Response) {
    try {
      const refreshToken = req.cookies.refreshToken
      const result = await authService.refresh(refreshToken)
      
      res
        .cookie("refreshToken", result.refreshToken, {
          httpOnly: true,
          secure: false,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          success: true,
          accessToken: result.accessToken
        })
    } catch (error: any) {
      res.status(401).json({
        message: error.message,
      })
    }
  }

  async logout(req: Request, res: Response) {
    const userId = (req as any).userId
    if (userId) {
      await authService.logout(parseInt(userId))
    }
    
    res.clearCookie("refreshToken").json({
      success: true,
      message: "Logged out",
    })
  }
}

export default new AuthController()
