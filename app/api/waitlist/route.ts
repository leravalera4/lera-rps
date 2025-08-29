import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Здесь можно добавить логику для сохранения email в базу данных
    // Например, используя Supabase или другую БД
    
    // Пока что просто логируем email
    console.log('New waitlist signup:', email)

    // В реальном приложении здесь будет:
    // await supabase.from('waitlist').insert({ email, created_at: new Date() })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
