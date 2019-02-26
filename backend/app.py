def application(environ, start_response):
    import psycopg2
    status = '200 OK'
    output = 'BIENVENIDO, tenemos estos autores:!'
    conn = psycopg2.connect(database="root", user="postgres", host="192.168.56.5", port="5432")
    cur = conn.cursor()
    cur.execute("SELECT * FROM libros")
    records= cur.fetchall()
    for record in records:
        output += repr(record)
    cur.close()
    conn.close()
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(output)))]
    start_response(status, response_headers)
    return [output]

